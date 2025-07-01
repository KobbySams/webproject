const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Highlight active menu item
const highlightMenu = () => {
    const navLinks = document.querySelectorAll('.navbar__links');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Handle home page link (href="/") for both server root and local file
        if (linkHref === '/' && (currentPath === '/' || currentPath.endsWith('/Nalley.html'))) {
            link.classList.add('active-page');
        } 
        // Handle other pages by checking if the current path ends with the link's href
        else if (linkHref !== '/' && currentPath.endsWith(linkHref)) {
            link.classList.add('active-page');
        }
    });
};

highlightMenu(); // Call the function to highlight the link on page load