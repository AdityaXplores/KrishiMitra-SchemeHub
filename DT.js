document.addEventListener('DOMContentLoaded', () => {
    // Example of adding a simple interaction: Toggle visibility of content sections
    document.querySelectorAll('section h3').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    // Notification button click event
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.addEventListener('click', () => {
        alert('You have new notifications!');
    });
});

