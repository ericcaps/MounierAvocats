// Récupération des éléments à surveiller


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
let stopScrollEvent = false;

// Fonction pour mettre à jour l'état actif de la nav-barre
const updateNav = (selectedLink) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.classList.remove('uk-active');
    });
    selectedLink.classList.add('uk-active');

};

// Fonction pour déterminer quelle section est visible
const updateSection = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
            const selectedLink = document.querySelector(`.nav-link[data-ref="${section.id}"]`);
            updateNav(selectedLink);
        } else {
            //cacher la nav bar
        }
        // if (window.pageYOffset == section.offsetTop) {
        //     console.log(window.pageYOffset,section.offsetTop)
        //     document.querySelectorAll("nav").forEach((el) => {
        //         el.classList.add("uk-hidden")
        //     })
        //    
        //     document.querySelector(`section#${section.id} nav`).classList.remove('uk-hidden')
        // }
    });
};

// Événement de scroll pour mettre à jour l'état actif de la nav-bar et la section visible
window.addEventListener('scroll', () => {
    event.preventDefault()

    updateSection();
});


function OnLinkClick(targetId) {

    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    const selectedLink = document.querySelector(`.nav-link[data-ref="${targetId}"]`);
    updateNav(selectedLink)

    navHeighIfFirstSection = targetId == "accueil" ? 80 : 0;
    window.scrollTo({
        top: targetSection.offsetTop - navHeighIfFirstSection,
        left: targetSection.offsetLeft,
        behavior: "smooth"
    });


}

function typed() {
    console.log("typed")
    var typed = new Typed('#typed', {
        strings: ['Cabinet Yves Mounier, Avocats', 'Droit des affaires', 'Droit du travail', 'Droit des sociétés'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        showCursor: true
    });
}
