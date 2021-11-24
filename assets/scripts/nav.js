const menu_icon = document.querySelector('#wrap-menu');
const nav_options = document.querySelector('.nav_navigation');
const body = document.getElementsByTagName('body')[0]; 

menu_icon.addEventListener('click', () => {
    if (nav_options.classList.contains('nav_navigation_visible')) {
        //Si tiene la clase visible, se la quita
        nav_options.classList.remove('nav_navigation_visible');
        body.classList.remove('fixed_body'); /*Permite que se pueda hacer scroll en el body*/
    } else {
        //Si no la tiene, se la incluye
        nav_options.classList.add('nav_navigation_visible');
        body.classList.add('fixed_body'); /*Evita que se pueda hacer scroll en el body*/
    }
});
