document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('farmerForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Example of processing form data (you can send it to a server here)
        console.log('Form Data:', data);

        // Display a success message
        formMessage.textContent = 'Thank you! Your details have been submitted successfully.';
        formMessage.style.color = '#4CAF50';

        // Optionally, clear the form
        form.reset();
    });
});
