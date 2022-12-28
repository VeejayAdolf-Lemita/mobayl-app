let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click',  () => {
	navBar.classList.toggle('toggle');
});

