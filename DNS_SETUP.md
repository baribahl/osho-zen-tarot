# 🌐 Configuration DNS pour osho.barib.art

## ✅ Étape 1: GitHub Pages est configuré

Le site est déployé sur: https://github.com/baribahl/osho-zen-tarot

GitHub Actions build et déploie automatiquement à chaque push sur `main`.

## 📋 Étape 2: Configuration DNS chez Infomaniak

Pour que `osho.barib.art` pointe vers GitHub Pages, configure ces enregistrements DNS:

### Option A: Avec sous-domaine (recommandé)

Dans la zone DNS de `barib.art` chez Infomaniak:

```
Type: CNAME
Nom: osho
Valeur: baribahl.github.io
TTL: 3600 (1 heure)
```

### Option B: Avec domaine racine (alternative)

Si tu veux utiliser `osho.barib.art`, utilise les IP GitHub Pages:

```
Type: A
Nom: osho
Valeur: 185.199.108.153
TTL: 3600

Type: A
Nom: osho
Valeur: 185.199.109.153
TTL: 3600

Type: A  
Nom: osho
Valeur: 185.199.110.153
TTL: 3600

Type: A
Nom: osho
Valeur: 185.199.111.153
TTL: 3600
```

## 🔧 Étape 3: Activer GitHub Pages dans le repo

1. Va sur: https://github.com/baribahl/osho-zen-tarot/settings/pages
2. Sous "Build and deployment":
   - Source: **GitHub Actions** (déjà configuré)
3. Sous "Custom domain":
   - Entre: `osho.barib.art`
   - Coche: **Enforce HTTPS**

## ⏱️ Délai de propagation DNS

- **CNAME**: 5-15 minutes
- **A records**: 30 minutes - 2 heures

## ✅ Vérification

Après configuration DNS, vérifie avec:

```bash
# Vérifier le CNAME
nslookup osho.barib.art

# Tester le site
curl -I https://osho.barib.art
```

## 🔗 Liens utiles

- **Repo GitHub**: https://github.com/baribahl/osho-zen-tarot
- **Actions (build status)**: https://github.com/baribahl/osho-zen-tarot/actions
- **Settings Pages**: https://github.com/baribahl/osho-zen-tarot/settings/pages
- **GitHub Pages Docs**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 🎯 Résultat attendu

Une fois la DNS propagée:
- ✅ https://osho.barib.art → Ton site Osho Zen Tarot
- ✅ HTTPS automatique via GitHub
- ✅ Deploy automatique à chaque modification
- ✅ CDN global GitHub pour performance

---

**Note**: Le fichier `public/CNAME` contient déjà `osho.barib.art`, donc GitHub Pages saura quel domaine utiliser dès que tu actives la configuration dans les settings!
