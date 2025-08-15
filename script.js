// Attach a submit handler to the contact form to show a Windows alert box on submit.
document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.contact-form');
	if (!form) return;

	// create a container for inline messages
	let msgEl = document.createElement('div');
	msgEl.className = 'form-message';
	form.insertBefore(msgEl, form.firstChild);

	form.addEventListener('submit', function (e) {
		e.preventDefault(); // keep on-page for demo

		// Collect values
		const name = (form.querySelector('#name') || {}).value || '';
		const email = (form.querySelector('#email') || {}).value || '';
		const message = (form.querySelector('#message') || {}).value || '';

		// Basic empty validation
		if (!name.trim() || !email.trim() || !message.trim()) {
			msgEl.textContent = 'Please fill in your name, email, and message before submitting.';
			msgEl.classList.add('form-error');
			// focus first empty field
			if (!name.trim()) form.querySelector('#name').focus();
			else if (!email.trim()) form.querySelector('#email').focus();
			else form.querySelector('#message').focus();
			return;
		}

		// Clear any previous message and show alert
		msgEl.textContent = '';
		msgEl.classList.remove('form-error');
		alert('Thank you! Your message has been received. We will get back to you within 48 hours.');
		form.reset();
	});
});
