// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    // Check if elements exist
    if (navToggle) {
        console.log("Nav toggle found!");
    } else {
        console.error("Error: Nav toggle element not found.");
    }

    if (navLinks.length > 0) {
        console.log("Nav links found:", navLinks);
    } else {
        console.error("Error: Nav links not found.");
    }

    // Attach event listener to nav toggle
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');

        // Log the updated classList of body
        console.log("Body classes:", document.body.classList); 

        document.body.style.overflow = document.body.classList.contains('nav-open') ? 'hidden' : 'auto';
    });

    // Attach event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
            document.body.style.overflow = 'auto';
        });
    });
});
