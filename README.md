# 🌸 Barib's Osho Zen Tarot

Site web interactif pour le Tarot Zen d'Osho, proposant un tirage de cartes intuitif et une galerie complète des 79 cartes.

🌐 **Site en ligne**: [osho.barib.art](https://osho.barib.art)

## ✨ Fonctionnalités

- 🎴 **Tirage de carte aléatoire** avec animation cinématique
- 📚 **Galerie complète** des 79 cartes organisées par famille d'arcanes
- 🎨 **Interface élégante** avec backdrop blur et effets translucides
- 📱 **Responsive design** optimisé mobile, tablette et desktop
- ♿ **Accessible** avec navigation au clavier et skip links
- 🔄 **Loader animé** pour les images pendant le chargement

## 🚀 Structure du Projet

```text
osho-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Welcome.astro
│   ├── data/
│   │   └── osho_cards.json        # 79 cartes complètes
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Layout principal avec navigation
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro            # Tirage de carte
│   │   ├── cartes.astro           # Galerie
│   │   ├── a-propos.astro         # À propos
│   │   └── carte/
│   │       └── [id].astro         # Pages individuelles
│   └── styles/
│       └── variables.css
├── astro.config.mjs               # Configuration Astro
├── package.json
├── DEPLOYMENT_CHECKLIST.md        # Guide de déploiement
└── README.md
```

## 🧞 Commandes

Toutes les commandes s'exécutent depuis la racine du projet:

| Commande              | Action                                              |
| :-------------------- | :-------------------------------------------------- |
| `npm install`         | Installer les dépendances                           |
| `npm run dev`         | Démarrer le serveur de dev sur `localhost:4321`     |
| `npm run build`       | Build du site de production dans `./dist/`          |
| `npm run preview`     | Prévisualiser le build localement avant déploiement |
| `npm run astro ...`   | Exécuter des commandes CLI Astro                    |

## 📦 Build et Déploiement

Le build génère **82 pages HTML statiques** (79 cartes + 3 pages):

```bash
# Build de production
npm run build

# Taille du build: ~0.95 MB pour 88 fichiers
# Output: dist/
```

### Déploiement sur osho.barib.art

Le site est configuré pour `https://osho.barib.art` dans `astro.config.mjs`.

Options de déploiement:
- **Netlify**: Drag & drop du dossier `dist/`
- **Vercel**: Import du repo Git
- **Cloudflare Pages**: Connexion Git directe
- **GitHub Pages**: Via GitHub Actions

Voir `DEPLOYMENT_CHECKLIST.md` pour la checklist complète.

## 🎨 Technologies

- **Astro** v5.15.9 - Static Site Generator
- **Google Fonts** - Cinzel Decorative, Crimson Pro, Philosopher
- **Material Symbols** - Icônes pour l'interface
- **ImgBB** - Hébergement des images de cartes

## 📊 Contenu

- **79 cartes complètes** avec:
  - Image haute résolution
  - Nom de la carte
  - Famille d'arcane (Feu, Eau, Nuages, Arc-en-ciel, Majeure)
  - Numéro de carte
  - Signification détaillée
  - Commentaire complet en plusieurs paragraphes

## 🌟 Fonctionnalités Visuelles

- Box translucide avec `backdrop-filter: blur(20px)`
- Gradient sur le nom de la carte (turquoise → orange)
- Badge arcane en forme de pilule avec émoji
- Divider décoratif avec ornement central
- Section icons (auto_stories, chat_bubble)
- Loader animé avec 3 anneaux rotatifs
- Transitions fluides entre les états

## 🔧 Configuration

**astro.config.mjs**:
```javascript
export default defineConfig({
  site: 'https://osho.barib.art'
});
```

## 📝 License

© 2025 Barib's Osho Zen Tarot - Tous droits réservés

---

Créé avec ❤️ par Barib
