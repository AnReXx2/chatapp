document.addEventListener('DOMContentLoaded', function(event) {
    
    /***** Burger Menu *****/

    let headerBurger = document.querySelector('.header__burger');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    headerBurger.onclick = () => {
        headerBurger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
});