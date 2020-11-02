// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.getElementsByClassName('navbar')[0];
//     if (navbar != null) {
//         document.body.style.paddingTop = navbar.clientHeight + "px";
//     }
// }, false);

window.addEventListener('scroll', function(){
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.classList.toggle("navbar-sticky", window.scrollY > 8);
});

if (document.getElementsByClassName("nav-main-items")[0]) {
    document.getElementsByClassName("nav-main-items")[0].addEventListener("click", toggleMenu); 
}

function toggleMenu() {
    const nav = document.getElementsByClassName('nav-main-items')[0];
    if (nav) {
        console.log("work");
        nav.classList.toggle("mobile-navigation-visible");
    }
}

// var slider = tns({
//     container: '.slider-items',
//     items: 1,
//     slideBy: 'page',
//     autoplay: true,
//     autoplayTimeout: 4000,
//     speed: 500,
//     autoplayButtonOutput: false,
//     controls: false,
// });

function toggleFaqItem(element) {
    const faqItem = element.parentNode.children[1];
    const faqArrow = element.children[1];
    faqArrow.classList.toggle("faq-arrow-open");
    faqItem.classList.toggle("faq-content-open");
}