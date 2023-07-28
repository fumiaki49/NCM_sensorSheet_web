function unset_boxShadow() {
	let get_homeHeader = document.getElementById('home_nav-fullWidth');
	get_homeHeader.style.boxShadow = "0 0 0 0";
}

function set_boxShadow() {
	let get_homeHeader = document.getElementById('home_nav-fullWidth');
	let get_scrollPosition = window.scrollY;
	
	if(get_scrollPosition > 10) {
		get_homeHeader.style.boxShadow = "0 5px 5px -5px rgba(0,0,0,0.5)";
	} else {
		get_homeHeader.style.boxShadow = "unset";
	}
}

document.addEventListener('load', function() {
	unset_boxShadow();
})

document.addEventListener('scroll', function() {
	set_boxShadow();
});