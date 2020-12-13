let menu = document.querySelector('.toggle-btn');
let body = document.querySelector('.body-wrap');
let sideNav = document.querySelector('.side-nav');

menu.addEventListener('click', () => {
    body.classList.toggle('toggle-body');
    sideNav.classList.toggle('appear');
})