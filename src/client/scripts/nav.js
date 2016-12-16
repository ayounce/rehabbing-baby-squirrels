window.onload = function() {
	var initLinks = function() {
		var links;
		var navicon;
		var addEventToLinks;
		var addActive, removeActive, toggleActive, toggleNaviconActive;
		var onload;

		links   = document.querySelectorAll('.main-nav a:not(.navicon)')
		navicon = document.querySelector('.main-nav .navicon')

		addEventToLinks = function(action) {
			for (var i = 0; i < links.length; i++)
				action(links[i])
		}

		addActive = function(link) {
			link.classList.add('active')
		}

		removeActive = function(link) {
			link.classList.remove('active')
		}

		toggleActive = function(link) {
			link.addEventListener('click', function() {
				removeActive(navicon)
				if (link.classList.contains('active')) return
				addEventToLinks(removeActive)
				addActive(link)
			})
		}

		toggleNaviconActive = function() {
			navicon.addEventListener('click', function() {
				navicon.classList.toggle('active')
			})
			navicon.addEventListener('keypress', function(event) {
				if (event.keyCode !== 13 && event.keyCode !== 32) return // enter and spacebar
				event.preventDefault()
				navicon.click()
			})
		}

		onload = function(link) {
			var href, path;
			path = window.location.pathname.toLowerCase()
			href = link.getAttribute('href')
			if (!href) return
			href = href.split('?')[0].split('#')[0].toLowerCase()
			if (path != href) return
			addActive(link)
		}

		addEventToLinks(onload)
		addEventToLinks(toggleActive)
		toggleNaviconActive()
	}

	setTimeout(initLinks, 75)
}