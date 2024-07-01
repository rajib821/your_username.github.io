document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Display a success message
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    formMessage.style.color = 'green';

    // Optionally, clear the form
    document.getElementById('contact-form').reset();
});
