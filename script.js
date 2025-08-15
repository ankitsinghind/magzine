// Attach a submit handler to the contact form to show a Windows alert box on submit.
document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.contact-form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault(); // prevent actual submission for demo
		// Simple Windows-style alert
		alert('Thank you! Your message has been received. We will get back to you within 48 hours.');
		// Optionally reset the form
		form.reset();
	});
});
