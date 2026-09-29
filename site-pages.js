const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
	menuToggle.addEventListener('click', () => {
		const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
		navLinks.classList.toggle('is-open', !isOpen);
	});

	navLinks.addEventListener('click', (event) => {
		if (event.target.closest('a')) {
			navLinks.classList.remove('is-open');
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.setAttribute('aria-label', 'Open navigation');
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
			navLinks.classList.remove('is-open');
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.setAttribute('aria-label', 'Open navigation');
			menuToggle.focus();
		}
	});
}

document.querySelectorAll('[data-current-year]').forEach((year) => {
	year.textContent = new Date().getFullYear();
});