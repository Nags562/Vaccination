document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu-icon');
    const navLinks = document.querySelector('.main-nav .nav-links');
  
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Add a class to show/hide the menu
            burgerMenu.classList.toggle('open'); // For burger icon animation
        });
  
        //Close menu when a link is clicked 
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('open');
            });
        });
    }
  });