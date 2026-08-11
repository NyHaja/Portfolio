/********************* menu icon navbar *********************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Gestion de la vidéo
// Ourir la modale
document.getElementById("openModal").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById("videoModal").style.display = "block";
});

// Fermer la modale
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("videoModal").style.display = "none";
});

// Fermer la modale en cliquant à l'extérieur de la fenêtre
window.addEventListener("click", function(event) {
    if(event.target === document.getElementById("videoModal")) {
        document.getElementById("videoModal").style.display = "none";
    }
});
/********************* typed js *********************/

/********************* swiper slider *********************/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,          //nombre de slide visible
    spaceBetween: 10,          //espace entre les slides
    loop: true,                //boucle infinie
    grabCursor: true,          //curseur en main
    pagination: {              //pagination automatique 
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/********************* dark and light mode *********************/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/* La gestion des langues (FR/EN) est désormais assurée par assets/js/i18n.js */

/********************* scroll to top *********************/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .hobby-container, .about-content, .img1 ',  { origin: 'right' });
ScrollReveal().reveal('.about-img img, .img2', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .home-content a', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h3, .btn', { origin: 'bottom', delay: 500 });