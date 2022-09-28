let primaryTarget, primaryStyle, playerTarget, playerHeight, playerInterval

window.addEventListener('load', (event) => {
	console.log('YouTube - Scrollable Playlist: Loading')

	playerInterval = setInterval(() => {
		primaryTarget = document.querySelector("#primary")
		playerTarget = primaryTarget?.querySelector("#player")

		if(playerTarget) {
			console.log('YouTube - Scrollable Playlist: playerTarget -->', playerTarget)
			clearInterval(playerInterval);
			load();

			window.addEventListener('resize', function(event) {
				load();
			}, true);
		}
	}, 100);
});

function load() {
	primaryTarget = document.querySelector("#primary")
	primaryStyle = primaryTarget.currentStyle || window.getComputedStyle(primaryTarget)

	playerTarget = primaryTarget.querySelector("#player")
	playerHeight = playerTarget.offsetHeight

	let secondaryTarget = document.querySelector("#secondary")
	secondaryTarget.style.height = `${playerHeight + parseInt(primaryStyle.paddingTop)}px`
	secondaryTarget.style.overflow = `auto`

	console.log('YouTube - Scrollable Playlist: Loaded')
}