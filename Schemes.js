document.addEventListener('DOMContentLoaded', () => {
    // Example of adding a simple interaction: Toggle visibility of scheme content
    document.querySelectorAll('.scheme h2').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    // Example of adding a notification bell interaction
    const bell = document.querySelector('.notification-bell');
    bell.addEventListener('click', () => {
        alert('You have new notifications!');
    });
});
