# 📊 Portfolio Web - Progress Tracker

## 🎯 **État Actuel (27 Jun 2025)**

### ✅ **Terminé - MVP Fonctionnel**
- [x] **Backend Axum (Rust)** - API REST complète avec routes de contact
- [x] **Frontend Vue 3 + TypeScript + Tailwind** - Design moderne et responsive
- [x] **Données réelles extraites** - CV parsé via OCR des PDFs
- [x] **Logos d'entreprises** - 7 logos extraits automatiquement des PDFs
- [x] **Photo de profil** - Extraite et intégrée (profile-photo.jpg)
- [x] **Pages complètes** - Accueil, CV (avec bullet points stylisés), Projets, Contact
- [x] **Build fonctionnel** - Tests TypeScript passés
- [x] **Git repository** - Premier commit effectué (https://github.com/Pixma44/portfolio)

### ✅ **Terminé - Dockerisation MVP**
- [x] **Backend Dockerfile** - Multi-stage Rust build avec optimisations
- [x] **Frontend Dockerfile** - Vue build + Nginx avec config personnalisée
- [x] **Docker-compose.yml** - Intégration Traefik style maxime-pointet.fr
- [x] **.dockerignore** - Pour backend, frontend et root
- [x] **Nginx config** - Proxy API + SPA routing + sécurité

## 🚀 **Prochaines Étapes Immédiates**

### 🔄 **Phase 1: Test & Deploy MVP**
- [ ] **Test build Docker** - `docker build -t portfolio-backend ./backend`
- [ ] **Test build frontend** - `docker build -t portfolio-frontend ./frontend`
- [ ] **Test docker-compose** - `docker-compose up --build`
- [ ] **Commit Dockerisation** - Push vers GitHub
- [ ] **Deploy sur serveur** - Via docker-compose sur ton serveur

### 🗄️ **Phase 2: Migration SurrealDB (Après MVP)**
- [ ] **Setup SurrealDB** - Container + schéma de données
- [ ] **Migration script** - cv-data.ts → SurrealDB
- [ ] **Backend refactor** - Remplacer données statiques par API DB
- [ ] **Frontend refactor** - Appels API au lieu d'imports statiques

## 🔧 **Configuration Actuelle**

### **URLs Cibles**
- **Site** : `https://me.maxime-pointet.fr`
- **API** : `https://me.maxime-pointet.fr/api/*` (même domaine, path différent)

### **Docker Services**
```yaml
# portfolio-backend:3001 (Rust/Axum)
# portfolio-frontend:80 (Vue/Nginx)
# Réseau: proxy (externe Traefik)
```

### **Traefik Labels Style**
- Identique à tes services existants (sonarr, plex, etc.)
- TLS + letsencrypt
- Path-based routing pour l'API

## 📁 **Structure Actuelle**
```
portfolio-web/
├── backend/
│   ├── Dockerfile ✅
│   ├── .dockerignore ✅
│   ├── src/main.rs ✅ (API contact + CORS)
│   └── Cargo.toml ✅
├── frontend/
│   ├── Dockerfile ✅
│   ├── nginx.conf ✅ (proxy API + SPA)
│   ├── .dockerignore ✅
│   ├── src/ ✅ (Vue3 + TypeScript + données CV)
│   └── public/ ✅ (logos + photo + PDFs)
├── docker-compose.yml ✅
├── .dockerignore ✅
└── PROGRESS.md ✅ (ce fichier)
```

## 🎨 **Données Intégrées**
- **Informations personnelles** : Maxime Pointet, coordonnées complètes
- **7 expériences détaillées** : Hestiia, Kickmaker, Ventilairsec, etc.
- **Formation complète** : Polytech Nantes (4 étapes)
- **Compétences organisées** : 7 catégories (Langages, Embarqué, DevOps, etc.)
- **Langues** : Français natif, Anglais C1 (TOEIC 875), Espagnol
- **Logos réels** : Extraits des PDFs via OCR

## 🚨 **Notes Importantes**

### **Docker Installation**
- Docker vient d'être installé
- Redémarrage nécessaire pour WSL2 integration
- Tests à effectuer après redémarrage

### **Prochaine Session**
1. **Tester les builds Docker** localement
2. **Valider docker-compose** avec Traefik simulation
3. **Push commit Docker** vers GitHub
4. **Deploy MVP** sur ton serveur
5. **Planifier migration SurrealDB** pour iteration suivante

### **Contact & Config**
- **Git** : maxi.p@hotmail.fr / Maxime Pointet
- **Serveur** : Traefik + Authelia existants
- **DNS** : Un seul CNAME `me.maxime-pointet.fr` nécessaire

---

## 📝 **Commandes de Reprise**

```bash
# Après redémarrage
cd /home/pixma/portfolio-web

# Tests Docker
docker build -t portfolio-backend ./backend
docker build -t portfolio-frontend ./frontend
docker-compose up --build

# Si OK, commit et deploy
git add .
git commit -m "feat: Add Docker configuration for MVP deployment"
git push origin main
```

**🎯 Objectif : MVP en ligne sur me.maxime-pointet.fr !**