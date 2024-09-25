document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');
    const form = document.querySelector('form');
    const formLinks = document.querySelector('.form-links');

    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });

    // Form validation and animations
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Add animation class to form
        form.classList.add('form-submitting');

        // Simulate form submission (e.g., send data to the server)
        setTimeout(() => {
            // After submission simulation, remove animation class
            form.classList.remove('form-submitting');
            form.reset(); // Reset the form fields
            formLinks.classList.add('form-links-visible'); // Show form links
        }, 2000); // Simulate a 2-second submission delay
    });
});
