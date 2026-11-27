# Osho Zen Tarot

[Ouvrir le tarot](https://osho.barib.art)

Mélange le jeu, choisis l’une des cinq cartes face cachée et ouvre sa lecture. Les 79 cartes se parcourent également par famille ou par mot-clé. Le sélecteur FR / EN conserve la carte ou la famille que tu consultes.

## Développement

Le site est construit avec Astro et publié sur GitHub Pages. Utilise `npm ci`, puis `npm run dev` pour le développement. `npm run build` génère les 164 pages françaises et anglaises dans `dist/`.

Les photos WebP et les polices sont servies depuis le site. Les données françaises se trouvent dans `src/data/osho_cards.json` et leur traduction dans `src/data/readings.en.json`. Les interfaces des deux langues partagent les composants de `src/views/`.

## Archives du projet

Les notes ci-dessous décrivent la première version du site.

## 🌸 BaribOsho v1

> *Site web interactif - Une exploration du Tarot Zen d'Osho*

[![Live Site](https://img.shields.io/badge/🌐_Live-osho.barib.art-4ecdc4?style=for-the-badge)](https://osho.barib.art)
[![Version](https://img.shields.io/badge/Version-1.0.0-ff8c42?style=for-the-badge)](https://github.com/baribahl/osho-zen-tarot/releases)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro_5.15-ee5a6f?style=for-the-badge&logo=astro)](https://astro.build)

**BaribOsho** est un site interactif dédié au Tarot Zen d'Osho - une interface minimaliste et contemplative pour tirer une carte et explorer les 79 arcanes.

🎯 **Version actuelle**: v1 (Major UI overhaul)  
🚀 **Statut**: En ligne et fonctionnel!  
🔮 **Évolution**: Design mystique, typographie raffinée, animations fluides

---

## ✨ Fonctionnalités
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
│   ├── CNAME                      # Custom domain config
│   └── images/cards/              # Local card images (fallback)
├── src/
│   ├── components/
│   │   ├── CardCarousel.astro     # Horizontal card browser
│   │   ├── CardStack.astro        # Interactive card stack
│   │   └── Markdown.astro         # Rich text renderer
│   ├── data/
│   │   └── osho_cards.json        # 79 cards dataset
│   ├── layouts/
│   │   └── BaseLayout.astro       # Global layout + nav
│   ├── pages/
│   │   ├── index.astro            # 🎴 Card draw page
│   │   ├── cartes.astro           # 📚 Full gallery
│   │   ├── a-propos.astro         # ℹ️ About page
│   │   └── carte/[id].astro       # 🔍 Card details (x79)
│   └── styles/
│       ├── global.css             # Design tokens & base styles
│       └── overlay.css            # Card reveal overlay
├── .github/workflows/
│   └── deploy.yml                 # Auto CI/CD
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

## 📝 Changelog & Roadmap

### v1.0.0 - UI Overhaul (Dec 2025)
- ✨ **Design mystique** - Family-specific colors & glow effects
- 🎨 **Typographie raffinée** - Fluid typography scale
- 🔥 **Family emojis** - 🔥 Feu, 💧 Eau, ☁️ Nuages, 🌈 Arc-en-ciel, ✨ Majeures
- 🎭 **Animation fluide** - Smooth card draw with precise centering
- 📖 **Meilleure lisibilité** - Optimal reading width (62ch)
- 🧹 **Codebase clean** - Removed unused files, consolidated CSS

### v0.0.1 - Version initiale (Nov 2025)
- ✅ Tirage de carte fonctionnel
- ✅ Galerie complète des 79 cartes
- ✅ Pages détail individuelles
- ✅ Design responsive
- ✅ Déploiement GitHub Pages

### 🔮 Idées futures
- [ ] 🎯 Système de favoris / historique des tirages
- [ ] 🌙 Mode sombre / clair
- [ ] 🔊 Effets sonores subtils (option?)
- [ ] 📱 PWA pour installation mobile
- [ ] 🌍 Version anglaise du contenu
- [ ] 📊 Analytics simples (respectueux de la vie privée)
- [ ] ✨ Easter eggs mystiques...?

*Un pas à la fois!* 🥷

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

*BaribOsho v1 - Décembre 2025*

🔗 [osho.barib.art](https://osho.barib.art)

</div>
