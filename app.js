const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const main = document.querySelector('main');
const links = document.querySelectorAll('.links');
const logo = document.querySelector('.logo');
const body = document.querySelector('body')
let h = window.innerHeight;
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle')
    navLinks.classList.toggle('nav-active')
    main.classList.toggle('main-active')
    scrollTo(0,0)
    body.classList.toggle('overflow-h')
    links.forEach((link,index) => {
        link.style.animation = `linksFade 0.5s ease forwards ${index /4}s`
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > h+50 && window.scrollY < h+h*0.8+50) {
        logo.classList.add('black');
    } 
    else {
        logo.classList.remove('black');
    }
    if (window.scrollY > h && window.scrollY < h+h*0.8) {
        burger.classList.add('blackbg');
    }
    else {
        burger.classList.remove('blackbg');
    }
});
