/**
 * Gestion des langues (FR / EN) côté client, en remplacement de l'ancien
 * système PHP (cookie + ?lang=...). Le choix est mémorisé dans localStorage
 * et appliqué sans recharger la page.
 */

const STRAD = {
    fr: {
        page_title: "Mon Portfolio",

        // Barre de navigation
        accueil: "Accueil",
        a_propos: "À Propos",
        formations: "Formations",
        portfolio: "Portfolio",
        contact: "Contact",

        // Accueil
        salut: "Salut, je m'appelle",
        intro: "Et bienvenue sur mon portfolio. Ici tu trouveras mes projets et réalisations, mes compétences et mes expériences. Je te souhaite bonne visite ⚜️.",
        cv: "Télécharger mon CV",
        reseau: "Réseaux IP",

        // À Propos
        qui: "Qui",
        suis_je: " suis je ?",
        presentation1: "Je suis étudiant en Master informatique, et développer des applications ou des logiciels est l'une de mes plus grandes fiertés et motivations. Je m'intéresse particulièrement au développement et aux réseaux : j'aime autant coder des applications que comprendre comment tout communique derrière, du câblage jusqu'aux protocoles. Chaque jour m'apporte une nouvelle façon d'améliorer mes compétences et de construire quelque chose de concret, avec l'objectif d'aller loin dans ce métier et de devenir un développeur senior solide, à l'aise aussi bien sur le code que sur l'infrastructure réseau.",
        presentation2: "",

        // Formations et Expériences
        formation: "Mes Formations et Expériences",
        formations_subtitle: "Formations",
        experiences_subtitle: "Expériences",

        form1_titre: "Baccalauréat Général",
        form1_ecole: "Lycée Privé Saint Joseph Antsirabe",
        form2_titre: "Licence Informatique",
        form2_ecole: "Athénée Saint Joseph Antsirabe",
        form3_titre: "Licence Informatique",
        form3_ecole: "Université de Strasbourg",

        exp1_titre: "Stage d'étude",
        exp1_date: "Juin 2019 - Juillet 2019",
        exp1_desc_1: "Stage d'apprentissage chez ",
        exp1_company: "Labyrinth Antsirabe",
        exp1_desc_2: ", en développement d'application, avec la modélisation d'un jeu d'échecs en langage Java.",
        exp2_titre: "Chauffeur Livreur",
        exp2_desc_1: "Travail à temps plein pendant 6 mois chez ",
        exp2_company: "Alsace Transport Express",
        exp2_desc_2: ", puis en tant qu'intérimaire pendant 5 ans.",

        // Portfolio
        projet: "Mes Projets réalisés",
        // projet 1
        titre1: "Sokoban",
        "desc1.1": "Sokoban est un jeu de réflexion dans lequel le joueur doit pousser des caisses pour les placer sur des cases cibles. La modélisation de ce jeu a été réalisée ",
        C: " en C ",
        "desc1.2": " avec une interface graphique développée à l'aide de la ",
        sdl: "bibliothèque SDL2",
        "desc1.3": " et une option pour jouer directement via le terminal",
        // projet 2
        titre2: "Réseau IP - Traduction d'adresse IP",
        "desc2.1": "Ce projet consiste à réaliser une traduction d'adresses réseaux en utilisant les ",
        IP: "Protocol IP. ",
        "desc2.2": "Il s'agit de mettre en place un réseau local avec des machines virtuelles et de ",
        routeur: "configurer un routeur",
        "desc2.3": " pour permettre la communication entre les machines.",
        clique: "Cliquez ici",
        // projet 3
        titre3: "Arbre Généalogique - Structure de Données Algorithmiques",
        "desc3.1": "Ce projet consiste à modéliser un arbre généalogique en utilisant des structures de données algorithmiques. Il a été réalisé en C avec les ",
        liste: "Tables, Listes",
        "desc3.2": " et en implémentant des algorithmes de recherche et de parcours d'arbre avec la ",
        dicho: " recherche dichotomique ",
        et: " et ",
        profondeur: "la recherche en profondeur",
        // projet 4
        titre_miniville: "Minivilles Deluxe",
        desc_miniville_1: "Minivilles Deluxe est une adaptation multijoueur en ligne du jeu de plateau Machi Koro, réalisée comme projet intégrateur universitaire. Techniquement, il repose sur une architecture client-serveur en ",
        miniville_godot: "Godot 4 / GDScript",
        desc_miniville_2: " côté serveur headless, avec un backend ",
        miniville_flask: "Flask (Python)",
        desc_miniville_3: " et une base ",
        miniville_mysql: "MySQL",
        desc_miniville_4: ", le tout déployé sur deux VMs ",
        miniville_openstack: "OpenStack",
        desc_miniville_5: ". Le projet a été réalisé en équipe de 8 personnes.",
        // projet 5
        titre_chess: "Chess",
        desc_chess_1: "Durant mon stage d'étude, j'ai travaillé sur le développement d'un jeu d'échecs en ",
        chess_java: "JAVA",
        desc_chess_2: ". Le projet consistait à créer une interface graphique pour permettre aux utilisateurs de jouer contre l'ordinateur. J'ai utilisé des algorithmes d'intelligence artificielle pour implémenter le moteur de jeu et assurer une expérience de jeu fluide et engageante.",

        // Compétences
        skills_title: "Compétences",
        skills_langages_title: "Langages & Frameworks",
        skills_bdd_title: "Bases de données",
        skills_web_title: "Outils et Web",

        // Footer
        copyright: "Tous droits réservés",
    },

    en: {
        page_title: "My Portfolio",

        // Navbar
        accueil: "Home",
        a_propos: "About Me",
        formations: "Formations",
        portfolio: "Portfolio",
        contact: "Contact",

        // Home
        salut: "Hi, I'm",
        intro: "And welcome to my Portfolio. Here, you will find my projects and achievements, my skills, and my experiences. I hope you enjoy your visit ⚜️.",
        cv: "Download my CV",
        reseau: "Network IP",


        // About
        qui: "Who",
        suis_je: " am I?",
        presentation1: "I'm a Master's student in Computer Science, and building applications and software is one of my greatest sources of pride and motivation. I'm particularly interested in development and networks: I enjoy coding applications just as much as understanding how everything communicates behind the scenes, from the cabling up to the protocols. Every day gives me a new way to improve my skills and build something concrete, with the goal of going far in this field and becoming a solid senior developer, equally comfortable with code and network infrastructure.",
        presentation2: "",

        // Formations and Experiences
        formation: "Formations and Experiences",
        formations_subtitle: "Education",
        experiences_subtitle: "Experience",

        form1_titre: "General Baccalaureate",
        form1_ecole: "Lycée Privé Saint Joseph Antsirabe",
        form2_titre: "Computer Science Degree",
        form2_ecole: "Athénée Saint Joseph Antsirabe",
        form3_titre: "Computer Science Degree",
        form3_ecole: "University of Strasbourg",

        exp1_titre: "Study Internship",
        exp1_date: "June 2019 - July 2019",
        exp1_desc_1: "Learning internship at ",
        exp1_company: "Labyrinth Antsirabe",
        exp1_desc_2: ", in application development, including the modeling of a chess game in Java.",
        exp2_titre: "Delivery Driver",
        exp2_desc_1: "Full-time work for 6 months at ",
        exp2_company: "Alsace Transport Express",
        exp2_desc_2: ", then as a temp worker for 5 years.",

        // Portfolio
        projet: "My Projects",
        // project 1
        titre1: "Sokoban",
        "desc1.1": "Sokoban is a puzzle game in which the player must push crates to place them on target squares. The game was modeled ",
        C: "in language C",
        "desc1.2": " with a graphical interface developed using the ",
        sdl: "SDL2 library",
        "desc1.3": " and an option to play directly via the terminal.",
        // project 2
        titre2: "Network Address Translation",
        "desc2.1": "This project consists of performing network address translation using the ",
        IP: "IP Protocol",
        "desc2.2": ". This involves setting up a local network with virtual machines and configuring a ",
        routeur: "router",
        "desc2.3": " to enable communication between machines.",
        clique: "Click here",
        // project 3
        titre3: "Family Tree - Data Structures and Algorithms",
        "desc3.1": "This project consists of modeling a family tree using data structures and algorithms. It was implemented in C with",
        liste: "Table, List",
        "desc3.2": " and implementing search and tree traversal algorithms with ",
        dicho: "Binary Search",
        et: " and ",
        profondeur: "Depth-First Search",
        // project 4
        titre_miniville: "Minivilles Deluxe",
        desc_miniville_1: "Minivilles Deluxe is an online multiplayer adaptation of the board game Machi Koro, built as a university capstone project. Technically, it relies on a client-server architecture in ",
        miniville_godot: "Godot 4 / GDScript",
        desc_miniville_2: " for the headless server, with a backend in ",
        miniville_flask: "Flask (Python)",
        desc_miniville_3: " and a ",
        miniville_mysql: "MySQL",
        desc_miniville_4: " database, the whole thing deployed on two ",
        miniville_openstack: "OpenStack",
        desc_miniville_5: " VMs. The project was built by a team of 8 people.",
        // project 5 (placeholder to fill in)
        titre_chess: "Chess",
        desc_chess_1: "During my study internship, I worked on developing a chess game in ",
        chess_java: "JAVA",
        desc_chess_2: ". The project involved creating a graphical interface to let users play against the computer. I used artificial intelligence algorithms to implement the game engine and ensure a smooth, engaging gameplay experience.",

        // Skills
        skills_title: "Skills",
        skills_langages_title: "Languages & Frameworks",
        skills_bdd_title: "Databases",
        skills_web_title: "Tools & Web",

        // Footer
        copyright: "All rights reserved",
    },
};

const SUPPORTED_LANGS = ["fr", "en"];
const DEFAULT_LANG = "fr";

function getStoredLang() {
    const stored = localStorage.getItem("lang");
    return SUPPORTED_LANGS.includes(stored) ? stored : DEFAULT_LANG;
}

function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

    const dict = STRAD[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            el.textContent = dict[key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-link").forEach((link) => {
        const flag = link.querySelector("img");
        const isActive = link.getAttribute("data-lang") === lang;
        flag.classList.toggle("active-lang", isActive);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getStoredLang());

    document.querySelectorAll(".lang-link").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            applyLanguage(link.getAttribute("data-lang"));
        });
    });

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
