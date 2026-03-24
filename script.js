document.addEventListener('DOMContentLoaded', () => {
    // Basic Form Validation for contact.html
    const contactForm = document.getElementById('schoolContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your inquiry has been sent successfully!');
            contactForm.reset();
        });
    }

    // Highlighting Active Page in Header
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});