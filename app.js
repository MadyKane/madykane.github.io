const navSlide = () => {
    const bars = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    bars.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
            link.style.animation = ''
                } else {
            link.style.animation=`navLinkFade 0.5s ease downwards ${index / 7 + 0.3}s`;
         }
        });
        //bars animation
        bars.classList.toggle('toggle');

    });

}
navSlide();

const navigation = document.querySelector('nav');
const box =  document.querySelector('.box1')
window.addEventListener('scroll', () => {

    if(window.scrollY > 550){
        navigation.classList.add('anim-nav')
        box.classList.add('anim-nav')
    } else {
        navigation.classList.remove('anim-nav')
        box.classList.remove('anim-nav')
    }

})

let service = document.getElementById('service')
let serviceG = document.getElementById('serviceG')
let portfolio = document.getElementById('portfolio')
let portfolioG = document.getElementById('portfolioG')
let contact = document.getElementById('contact')
let contactG = document.getElementById('contactG')
let toop = document.getElementById('top')
let topG = document.getElementById('topG')

service.addEventListener('click', getToService);

function getToService() {
    serviceG.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

portfolio.addEventListener('click', getToPortfolio);

function getToPortfolio() {
    portfolioG.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

contact.addEventListener('click', getToContact);

function getToContact() {
    contactG.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

toop.addEventListener('click', getToTop);

function getToTop() {
    topG.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}