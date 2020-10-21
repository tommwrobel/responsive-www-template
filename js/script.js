window.addEventListener('scroll', function(){
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.classList.toggle("navbar-sticky", window.scrollY > 0);
});

function toggleMenu() {
    //const menuToggle = document.getElementsByClassName('menuToggle')[0];
    const nav = document.getElementsByClassName('main-navigation')[0];
    //menuToggle.classList.toggle("toggle-active");
    nav.classList.toggle("main-navigation-active");  
}