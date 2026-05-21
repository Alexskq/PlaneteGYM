# Planète Gym Valenciennes — Site Vitrine

Site vitrine moderne pour **Planète Gym Valenciennes**, salle de sport indépendante fondée en 2001.  
Refonte complète du site original (Webador) en HTML/CSS/JS vanilla, avec panneau d'administration intégré.

---

## Aperçu

| Page | Description |
|---|---|
| `index.html` | Site public — landing page complète |
| `admin.html` | Panneau d'administration (protégé par mot de passe) |

**URL de production :** `https://planet-gym-valenciennes.vercel.app`

---

## Fonctionnalités

- Hero plein écran avec animation "magazine reveal" lettre par lettre
- 5 sections espaces (musculation, cardio, cross training, biking, cours collectifs)
- Planning des cours interactif par onglet jour
- Galerie photos avec lightbox au clic
- Grille de tarifs avec les 3 formules d'abonnement
- Horaires d'ouverture et d'accueil
- Section contact avec carte Google Maps intégrée
- Navigation mobile avec menu hamburger animé + barre CTA sticky en bas d'écran
- Animations au scroll (Intersection Observer, sans librairie externe)
- 100% responsive — mobile first

---

## Stack technique

- **HTML5 / CSS3 / JavaScript vanilla** — aucune dépendance, aucun framework
- **Google Fonts** — Bebas Neue (titres) + Inter (corps)
- **Vercel** — hébergement statique gratuit
- **localStorage** — persistance des données de l'admin côté navigateur

---

## Structure des fichiers

```
planet-gym/
├── index.html      # Site public
├── admin.html      # Panneau d'administration
├── style.css       # Tous les styles
├── main.js         # Logique du site (rendu, navigation, lightbox...)
├── data.js         # Données par défaut (planning, galerie, tarifs, horaires)
├── vercel.json     # Configuration Vercel (site statique)
└── README.md
```

---

## Lancer le projet en local

Aucune installation requise. Ouvrir directement dans le navigateur :

```bash
open index.html
open admin.html
```

Ou avec un serveur local (recommandé pour éviter les restrictions CORS sur les fichiers uploadés) :

```bash
# avec Node.js
npx serve .

# avec Python
python3 -m http.server 8080
```

---

## Déploiement sur Vercel

### Première fois — via CLI

```bash
npm i -g vercel
cd planet-gym
vercel --prod
```

### Via GitHub (recommandé pour les mises à jour continues)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USER/planet-gym.git
git push -u origin main
```

Sur [vercel.com](https://vercel.com) → **Add New Project** → importer le repo → **Deploy**.  
Chaque `git push` sur `main` redéploie automatiquement.

---

## Panneau d'administration

Accès : `/admin.html`  
Mot de passe par défaut : `planetegym2025`

> Pour changer le mot de passe, modifier la constante `ADMIN_PASSWORD` en haut du script dans `admin.html`.

### Fonctionnalités de l'admin

| Onglet | Actions disponibles |
|---|---|
| **Planning** | Ajouter / supprimer des cours par jour (heure, nom, catégorie) |
| **Galerie** | Ajouter des photos par URL ou upload (drag & drop, max 3 Mo), supprimer |
| **Abonnements** | Modifier nom, prix, description et liste des avantages de chaque formule |
| **Horaires** | Modifier les horaires d'ouverture salle et les horaires d'accueil |

### Workflow de mise à jour du contenu

Les modifications de l'admin sont sauvegardées dans le `localStorage` du navigateur.  
Pour les rendre visibles sur le site en ligne, suivre ce workflow :

```
1. Faire les modifications dans admin.html
2. Cliquer sur "Exporter" → télécharge un data.js mis à jour
3. Remplacer le fichier data.js dans le projet
4. git add data.js && git commit -m "Update content" && git push
5. Vercel redéploie automatiquement (~30 secondes)
```

---

## Données du site

Toutes les données éditables sont centralisées dans `data.js` :

- **Planning** — cours par jour de la semaine
- **Galerie** — URLs et descriptions des photos
- **Abonnements** — nom, prix, avantages de chaque formule
- **Horaires** — horaires salle + horaires d'accueil

`main.js` lit ces données au chargement (localStorage en priorité, puis `data.js` en fallback) et génère dynamiquement les sections correspondantes.

---

## Informations du client

| | |
|---|---|
| **Salle** | Planète Gym Valenciennes |
| **Adresse** | 12 bis Rue Wedière, 59300 Valenciennes |
| **Téléphone** | 03 27 23 80 97 |
| **Instagram** | @planete_gym_valenciennes |
| **Fondée** | 2001 |

---

## Réalisé par

**Alexandre Zoonekynd**
