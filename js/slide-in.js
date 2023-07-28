window.addEventListener('load', function() {
	let animation_elements_leftRight = document.getElementsByClassName('leftAnime_load');
	let elementsArray = Array.from(animation_elements_leftRight);
	/*.leftAnime_loadの要素を左から右にスライドインさせる*/
	elementsArray.forEach(function(element){
		element.classList.add('slideAnimeLeftRight');
		
		let childElement = element.children;
		let childElementArray = Array.from(childElement);
		childElementArray.forEach(function(childElement) {
			childElement.classList.add('slideAnimeRightLeft');
		});
	});
	
	/*トップの画像を上から下にスライドイン*/
	let animation_element_topDown = document.querySelector('.top-image');
	animation_element_topDown.classList.add('fadeDown');
});