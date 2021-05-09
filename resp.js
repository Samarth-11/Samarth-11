burger = document.querySelector('.bueger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');


burger.addEventListner('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('v-class-resp');
})