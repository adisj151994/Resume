var ypos,image;

function parallex() {
	image = document.getElementById('first');
	ypos = window.pageYOffset;
	image.style.top = ypos * 0.4+ 'px';
}

window.addEventListener('scroll', parallex),false;
