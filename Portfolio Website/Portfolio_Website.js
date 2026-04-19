// Change Navbar background on scroll
window.onscroll = function() {
    const navbar = document.querySelector(".Navbar");
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = "black";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
};

// Simple active link toggling
const navLinks = document.querySelectorAll('.Navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
});