# ⚜️ Portfolio — Ny Haja Andrianiaina

Mon portfolio personnel : il présente mon parcours, mes formations, mes projets et mes compétences en développement et en réseaux.

## ✨ Fonctionnalités

- 🌍 **Bilingue français / anglais** : on change de langue avec les drapeaux, et le choix est gardé dans `localStorage`
- 🌓 **Mode nuit** activable depuis l'en-tête
- 📱 **Responsive** : mise en page adaptée aux mobiles, tablettes et ordinateurs
- 🎠 **Carrousel de projets** fait avec [Swiper](https://swiperjs.com/)
- 🧭 **Navigation active** : le lien du menu change selon la section affichée
- 📄 **CV téléchargeable** au format PDF

## 🗂️ Sections

| Section | Contenu |
|---|---|
| Accueil | Présentation et liens LinkedIn / GitHub |
| À propos | Mon profil et mes objectifs |
| Formations | Mes formations et mes expériences |
| Portfolio | Minivilles Deluxe, Sokoban, Réseau IP (NAT), Arbre généalogique, Chess |
| Compétences | Langages, outils et technologies |

## 🛠️ Technologies

- HTML5 / CSS3 (sans framework : ni Bootstrap ni jQuery)
- JavaScript (vanilla)
- [Boxicons](https://boxicons.com/) pour les icônes
- [Swiper](https://swiperjs.com/) pour le carrousel

## 📁 Structure

```
.
├── index.html
├── assets/
│   ├── js/
│   │   ├── script.js      # menu, scroll, carrousel, mode nuit
│   │   └── i18n.js        # traductions FR / EN
│   ├── style/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── images/            # images des projets, CV PDF, drapeaux
│   └── boxicons-2.1.4/
└── LICENCE
```

## 🚀 Lancer le projet

Il n'y a rien à installer : ouvrez `index.html` dans un navigateur.

Vous pouvez aussi utiliser un petit serveur local :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## 📬 Contact

- GitHub : [@NyHaja](https://github.com/NyHaja)
- LinkedIn : [Ny Haja Andrianiaina](https://www.linkedin.com/in/ny-haja-andrianiaina-38b490280/)

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENCE](LICENCE).
