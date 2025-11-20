# 🌸 BaribOsho v0

> *Mon premier site web interactif - Une exploration du Tarot Zen d'Osho*

[![Live Site](https://img.shields.io/badge/🌐_Live-osho.barib.art-4ecdc4?style=for-the-badge)](https://osho.barib.art)
[![Version](https://img.shields.io/badge/Version-0.0.1-ff8c42?style=for-the-badge)](https://github.com/baribahl/osho-zen-tarot/releases)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro_5.15-ee5a6f?style=for-the-badge&logo=astro)](https://astro.build)

**BaribOsho** est ma première incursion dans le développement web - un site interactif dédié au Tarot Zen d'Osho. Ce projet représente une étape importante dans mon apprentissage du développement frontend et de l'expérience utilisateur.

🎯 **Version actuelle**: v0 (Milestone inaugural)  
🚀 **Statut**: En ligne et fonctionnel!  
🔮 **Évolution**: Qui sait ce que l'avenir réserve? 🥷

---

## ✨ Ce que j'ai réalisé

### Fonctionnalités principales
- 🎴 **Tirage de carte intuitif** - Animation de révélation avec loader créatif
- 📚 **Galerie des 79 cartes** - Navigation par famille d'arcanes (Feu, Eau, Nuages, Arc-en-ciel, Majeure)
- 🎨 **Design immersif** - Interface avec backdrop blur, dégradés et effets translucides
- 📱 **Responsive** - Expérience optimisée pour mobile, tablette et desktop
- 🔄 **UX soignée** - Loader animé avec anneaux rotatifs pendant le chargement des images

### Apprentissages techniques
- **Astro 5.15** - Premier projet avec ce framework de site statique
- **TypeScript** - Utilisation basique pour la logique des cartes
- **CSS moderne** - Backdrop filters, gradients, animations, variables CSS
- **Déploiement** - Configuration GitHub Actions + GitHub Pages + domaine personnalisé
- **Performance** - Site de <1MB avec 82 pages statiques générées

---

## 🏗️ Architecture

```text
baribosho/
├── public/
│   ├── favicon.svg
│   └── CNAME                      # Configuration domaine personnalisé
├── src/
│   ├── data/
│   │   └── osho_cards.json        # Dataset: 79 cartes complètes
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout global avec navigation
│   ├── pages/
│   │   ├── index.astro            # 🎴 Page de tirage
│   │   ├── cartes.astro           # 📚 Galerie complète
│   │   ├── a-propos.astro         # ℹ️ À propos
│   │   └── carte/[id].astro       # 🔍 Pages détail (x79)
│   └── components/
│       └── Welcome.astro
├── .github/workflows/
│   └── deploy.yml                 # CI/CD automatique
├── astro.config.mjs
└── package.json
```

---

## 💻 Développement local

```bash
# Installation
npm install

# Dev server (http://localhost:4321)
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview
```

---

## 🚀 Déploiement

**Infrastructure actuelle**: GitHub Pages + GitHub Actions

- **Domaine personnalisé**: `osho.barib.art` (DNS via Infomaniak)
- **CI/CD**: Déploiement automatique à chaque push sur `main`
- **Build**: 82 pages statiques générées (~0.95 MB)
- **Performance**: CDN global GitHub, HTTPS automatique

Le workflow se déclenche automatiquement - aucune action manuelle requise! ✨

---

## 🛠️ Stack technique

| Technologie | Usage |
|------------|-------|
| **Astro 5.15** | Framework principal / SSG |
| **TypeScript** | Logique applicative |
| **CSS3** | Styling (variables, backdrop-filter, animations) |
| **Google Fonts** | Typographie (Cinzel Decorative, Crimson Pro, Philosopher) |
| **Material Symbols** | Iconographie UI |
| **ImgBB** | CDN pour images des cartes |
| **GitHub Actions** | CI/CD automatisé |
| **GitHub Pages** | Hébergement statique |

## 📦 Données

**79 cartes** structurées avec:
- Image haute résolution (via ImgBB CDN)
- Métadonnées (nom, numéro, famille d'arcane)
- Texte complet (signification + commentaire multi-paragraphes)
- Classification par famille (🔥 Feu, 💧 Eau, ☁️ Nuages, 🌈 Arc-en-ciel, ⭐ Majeure)

## 🎨 Détails d'implémentation

Quelques choix de design dont je suis fier:
- **Backdrop blur translucide** pour la box de carte révélée
- **Loader avec 3 anneaux rotatifs** de couleurs différentes pendant le chargement
- **Gradient animé** sur les noms de cartes (turquoise → orange)
- **Badges emoji** pour les familles d'arcanes
- **Dividers décoratifs** avec ornements centraux (✦)
- **Layout responsive** avec breakpoints soignés

---

## 🔮 Roadmap & Idées futures

Ce projet est en v0 - c'est un début! Quelques pistes d'amélioration possibles:

- [ ] 🎯 Système de favoris / historique des tirages
- [ ] 🌙 Mode sombre / clair
- [ ] 🎭 Animations plus poussées pour la révélation
- [ ] 🔊 Effets sonores subtils (option?)
- [ ] 📱 PWA pour installation mobile
- [ ] 🌍 Version anglaise du contenu
- [ ] 📊 Analytics simples (respectueux de la vie privée)
- [ ] ✨ Easter eggs mystiques...?

*Mais bon, on verra. Un pas à la fois!* 🥷

---

## 📝 Notes de version

### v0.0.1 - Version initiale (20 Nov 2025)
- ✅ Tirage de carte fonctionnel
- ✅ Galerie complète des 79 cartes
- ✅ Pages détail individuelles
- ✅ Design responsive
- ✅ Déploiement GitHub Pages
- ✅ Domaine personnalisé configuré

---

## 🙏 Remerciements

- **Osho** pour le Tarot Zen original
- **ImgBB** pour l'hébergement des images
- **GitHub** pour l'infrastructure gratuite
- **Astro team** pour ce framework génial
- Et à moi-même pour avoir osé me lancer! 😊

---

## 📄 License

© 2025 BaribOsho - Projet personnel  
Contenu du Tarot Zen d'Osho © leurs auteurs respectifs

---

<div align="center">

**Fait avec ❤️ et beaucoup de ☕**

*Premier projet web - Version 0 - Novembre 2025*

🔗 [osho.barib.art](https://osho.barib.art)

</div>
