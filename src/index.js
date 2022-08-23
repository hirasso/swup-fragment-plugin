import Plugin from '@swup/plugin';

export default class SwupFragmentPlugin extends Plugin {
	name = 'SwupFragmentPlugin';

	constructor(options) {
		super();

		const defaultOptions = {
			fragmentAttribute: 'data-swup-fragment',
			skipTransitionAttribute: 'data-swup-skip-transition'
		};

		this.options = {
			...defaultOptions,
			...options
		};
	}

	mount() {
		// create an entry in swups _handlers object,
		// so that we can fire a 'fragmentsReplaced' event later
		this.swup._handlers.fragmentReplaced = [];

		this.swup.on('clickLink', this.clickLink);
		this.swup.on('transitionEnd', this.transitionEnd);
		this.swup.on('willReplaceContent', this.willReplaceContent);
		this.swup.on('contentReplaced', this.contentReplaced);
	}

	unmount() {
		this.swup.off('clickLink', this.clickLink);
		this.swup.off('transitionEnd', this.transitionEnd);
		this.swup.off('willReplaceContent', this.willReplaceContent);
		this.swup.off('contentReplaced', this.contentReplaced);
	}

	/**
	 * Adds a class to the html to be able to skip some transitions
	 * @param {clickEvent} e
	 * @returns
	 */
	clickLink = (e) => {
		const skipTransition = e.target
			.closest('a')
			.matches(`[${this.options.skipTransitionAttribute}]`);
		if (skipTransition) {
			document.documentElement.classList.add('skip-transition');
			this.swup.skipTransition = true;
		}
	};

	/**
	 * Removes the class for skipping transitions after each transition
	 */
	transitionEnd = () => {
		document.documentElement.classList.remove('skip-transition');
		this.swup.skipTransition = false;
		if (this.resetScrollFunction != null) this.swup.scrollTo = this.resetScrollFunction;
	};

	/**
	 * Look for matching data-swup-fragment elements in the response
	 * and if there are matches, replace those instead of swups default containers.
	 * @returns void
	 */
	willReplaceContent = () => {
		// clone and store the original swup containers so that we can restore them later
		this.originalSwupContainers = [...this.swup.options.containers];
		// initially set this to false, until we find some fragments in the response
		this.fragmentsReplaced = false;
		// save the current cache entry
		const currentCacheEntry = this.swup.cache.getCurrentPage();
		// save the current cache blocks so that they can be reset in 'contentReplaced'
		this.originalBlocks = currentCacheEntry.blocks;
		// parse the html of the current cache entry
		const doc = new DOMParser().parseFromString(currentCacheEntry.originalContent, 'text/html');
		// look for fragments in the parsed html
		const fragments = doc.querySelectorAll(`[${this.options.fragmentAttribute}][id]`);

		// bail early if no fragments were found in the html
		if (!fragments.length) return;
		// save current [data-swup] elements
		const originalSwupElements = document.querySelectorAll('[data-swup]');

		const fragmentContainers = [];
		const fragmentBlocks = [];

		/**
		 * Cycle through all found fragments and look for
		 * placeholders in the current DOM. If there are any,
		 * create a block entry in the cache object and add the block's id to the options
		 */
		fragments.forEach((el, index) => {
			const placeholder = document.querySelector(`[data-swup-fragment][id="${el.id}"]`);

			if (!placeholder) return;
			// delete el.dataset.swupFragment
			placeholder.dataset.swup = index;
			fragmentContainers.push(`#${el.id}`);
			fragmentBlocks.push(el.outerHTML);
		});

		if (!fragmentContainers.length) return;
		this.fragmentsReplaced = true;

		// remove [data-swup] from the original swup elements
		originalSwupElements.forEach((el) => {
			el.dataset.restoreSwup = el.dataset.swup;
			delete el.dataset.swup;
		});

		// apply the fragment blocks to the cache entry
		currentCacheEntry.blocks = fragmentBlocks;
		// update the cache
		this.swup.cache.cacheUrl(currentCacheEntry);

		// apply the updated swup containers option
		this.swup.options.containers = fragmentContainers;

		const scrollPlugin = this.swup.findPlugin('ScrollPlugin');
		if (scrollPlugin != null) {
			this.resetScrollFunction = this.swup.scrollTo;
			this.swup.scrollTo = () => {};
		}
	};

	/**
	 * if we replaced fragments before rendering the page,
	 * reset the state so that popstate will still work as expected
	 * @returns
	 */
	contentReplaced = (popstate) => {
		// bail early if no fragments were replaced
		if (!this.fragmentsReplaced) return;
    
		// restore the original swup containers
		this.swup.options.containers = this.originalSwupContainers;
		// reset the cache with the original blocks
		const cacheEntry = this.swup.cache.getCurrentPage();
		cacheEntry.blocks = this.originalBlocks;
		this.swup.cache.cacheUrl(cacheEntry);
		// restore [data-swup] attributes
		document.querySelectorAll('[data-restore-swup]').forEach((el) => {
			el.setAttribute('data-swup', el.getAttribute('data-restore-swup'));
			el.removeAttribute('data-restore-swup');
			// el.dataset.swup = el.dataset.restoreSwup
			// delete el.dataset.restoreSwup
		});

		this.swup.triggerEvent('fragmentReplaced', popstate);
	};
}
