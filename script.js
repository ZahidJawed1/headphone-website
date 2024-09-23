// Function to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show button when footer is reached
window.onscroll = function() {
    const footer = document.querySelector('footer');
    const button = document.getElementById('backToTop');

    // Check if user has scrolled near the footer
    const footerPosition = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Show button if the footer is in view
    if (footerPosition <= screenHeight) {
        button.style.display = 'flex'; // Show button
    } else {
        button.style.display = 'none'; // Hide button
    }
};


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open'); // Add an 'open' class for animation
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active'); // Close the menu
        hamburger.classList.remove('open'); // Remove the 'open' class
    }
});



