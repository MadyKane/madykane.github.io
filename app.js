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

//Nav background depending on Y level

const navigation = document.querySelector('nav');
const box =  document.querySelector('.box1');
window.addEventListener('scroll', () => {

    if(window.scrollY > 550){
        navigation.classList.add('anim-nav')
        box.classList.add('anim-nav')       
    } else {
        navigation.classList.remove('anim-nav')
        box.classList.remove('anim-nav')
    }

})

//Blue color depending on the area we are in

window.addEventListener('scroll', () => {

    if(window.scrollY > 550 && window.scrollY < 1100){
        service.classList.add('blue')
        contact.classList.remove('blue')
        portfolio.classList.remove('blue')
    } 
    else if (window.scrollY >=1100 && window.scrollY < 1500){
        portfolio.classList.add('blue')
        service.classList.remove('blue')
        contact.classList.remove('blue')
        
    }
    else if (window.scrollY >=1500 && window.scrollY < 2100){
        contact.classList.add('blue')
        portfolio.classList.remove('blue')
        service.classList.remove('blue')
    }
    else {
        service.classList.remove('blue')
        portfolio.classList.remove('blue')
        contact.classList.remove('blue')
    }

})


// Scroll to function


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

//animation services 

let ser1 = document.querySelector('.serv1');
let ser2 = document.querySelector('.serv2');
let ser3 = document.querySelector('.serv3');

window.addEventListener('scroll', () => {
    if(window.scrollY > 400 && window.scrollY < 1000 ){
        setTimeout(ser1.style.visibility='visible',3000)
        ser2.style.visibility='visible'
        ser3.style.visibility='visible'
        ser1.classList.add('appear')     
        ser2.classList.add('appear')  
        ser3.classList.add('appear')  
    } else {
        ser1.style.visibility='hidden'
        ser2.style.visibility='hidden'
        ser3.style.visibility='hidden'
        ser1.classList.remove('appear')  
        ser2.classList.remove('appear')  
        ser3.classList.remove('appear')  
    }
})
