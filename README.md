# Portfolio Web

Un portfolio complet développé avec Axum (Rust) pour le backend et Vue 3 + TypeScript + Tailwind CSS pour le frontend.

## 🚀 Stack Technique

### Backend
- **Rust** avec **Axum** - Framework web moderne et performant
- **Tower-HTTP** - Middleware CORS
- **Serde** - Sérialisation/désérialisation JSON
- **Chrono** - Gestion des dates et timestamps
- **UUID** - Génération d'identifiants uniques

### Frontend
- **Vue 3** avec **Composition API**
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Vue Router** - Routage SPA
- **Axios** - Client HTTP
- **Heroicons** - Icônes SVG

## 📁 Structure du Projet

```
portfolio-web/
├── backend/                 # API Rust avec Axum
│   ├── src/
│   │   └── main.rs         # Point d'entrée et routes API
│   └── Cargo.toml          # Dépendances Rust
├── frontend/               # Application Vue 3
│   ├── src/
│   │   ├── components/     # Composants réutilisables
│   │   ├── pages/          # Pages de l'application
│   │   ├── router/         # Configuration du routage
│   │   ├── types/          # Types TypeScript
│   │   └── assets/         # Styles et ressources
│   ├── package.json        # Dépendances Node.js
│   ├── tsconfig.json       # Configuration TypeScript
│   ├── tailwind.config.js  # Configuration Tailwind
│   └── vite.config.ts      # Configuration Vite
└── README.md
```

## 🌟 Fonctionnalités

### Pages
- **Accueil** - Présentation personnelle avec hero section et compétences
- **CV** - Curriculum vitae détaillé avec téléchargement PDF
- **Projets** - Portfolio de projets (Infrastructure, Embarqué, Jeux WASM)
- **Contact** - Formulaire de contact avec validation

### Fonctionnalités Techniques
- Design responsive et moderne
- API REST pour le formulaire de contact
- Validation côté client et serveur
- Architecture modulaire et maintenable
- CORS configuré pour le développement
- Proxy de développement Vite vers l'API

## 🛠️ Installation et Développement

### Prérequis
- Rust (>= 1.70)
- Node.js (>= 18)
- npm ou yarn

### Backend (Port 3001)

```bash
cd backend
cargo run
```

Le serveur sera accessible sur `http://127.0.0.1:3001`

### Frontend (Port 3000)

```bash
cd frontend
npm install
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🔧 Scripts Disponibles

### Backend
```bash
cargo run          # Démarrer le serveur de développement
cargo build        # Compiler l'application
cargo test         # Exécuter les tests
```

### Frontend
```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run preview    # Prévisualiser le build
npm run lint       # Linter ESLint
npm run format     # Formatter Prettier
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont configurées dans `frontend/tailwind.config.js` :
- Primary : Bleu (#3b82f6)
- Gray : Nuances de gris pour le texte et arrière-plans

### Contenu
- Modifiez les données personnelles dans les composants Vue
- Ajoutez vos projets dans `frontend/src/pages/Projects.vue`
- Personnalisez les expériences dans `frontend/src/pages/CV.vue`

## 📡 API Endpoints

### Backend Routes
- `GET /` - Health check
- `GET /api/health` - Status de l'API
- `POST /api/contact` - Envoi de message de contact
- `GET /api/messages` - Récupération des messages (dev)

### Format des données Contact
```typescript
interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}
```

## 🚀 Déploiement

### Backend
```bash
cd backend
cargo build --release
./target/release/portfolio-backend
```

### Frontend
```bash
cd frontend
npm run build
# Servir le dossier dist/ avec votre serveur web préféré
```

## 📝 TODO / Améliorations

- [ ] Implémenter l'envoi d'emails via SMTP
- [ ] Ajouter la génération PDF du CV
- [ ] Intégrer une base de données (PostgreSQL)
- [ ] Ajouter l'authentification admin
- [ ] Implémenter un CMS pour la gestion du contenu
- [ ] Ajouter des tests unitaires et d'intégration
- [ ] Optimiser les performances et le SEO
- [ ] Ajouter la PWA (Progressive Web App)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.