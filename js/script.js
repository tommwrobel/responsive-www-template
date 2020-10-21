window.addEventListener('scroll', function(){
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.classList.toggle("navbar-sticky", window.scrollY > 0);
});

window.addEventListener('resize', function(){
    const nav = document.getElementsByClassName('mobile-navigation')[0];
    nav.classList.remove("mobile-navigation-active");
});
function toggleMenu() {
    //const menuToggle = document.getElementsByClassName('menuToggle')[0];
    const nav = document.getElementsByClassName('mobile-navigation')[0];
    //menuToggle.classList.toggle("toggle-active");
    nav.classList.toggle("mobile-navigation-active");
}