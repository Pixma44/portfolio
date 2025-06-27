#!/bin/bash

# Script de démarrage pour le portfolio web
# Lance le backend (Rust/Axum) et le frontend (Vue.js) simultanément

echo "🚀 Démarrage du Portfolio Web"
echo "==============================="

# Vérifier que les dépendances sont installées
echo "📦 Vérification des dépendances..."

# Vérifier Rust
if ! command -v cargo &> /dev/null; then
    echo "❌ Rust/Cargo n'est pas installé"
    echo "Installez Rust depuis https://rustup.rs/"
    exit 1
fi

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "Installez Node.js depuis https://nodejs.org/"
    exit 1
fi

# Installer les dépendances du frontend si nécessaire
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installation des dépendances frontend..."
    cd frontend && npm install && cd ..
fi

# Créer les logs
mkdir -p logs

echo "🔧 Démarrage des services..."

# Démarrer le backend en arrière-plan
echo "🦀 Démarrage du backend Rust (port 3001)..."
cd backend && cargo run > ../logs/backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Attendre que le backend soit prêt
echo "⏳ Attente du backend..."
sleep 3

# Démarrer le frontend en arrière-plan
echo "🖼️  Démarrage du frontend Vue.js (port 3000)..."
cd frontend && npm run dev > ../logs/frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Créer un fichier PID pour pouvoir arrêter les services
echo $BACKEND_PID > backend.pid
echo $FRONTEND_PID > frontend.pid

echo ""
echo "✅ Services démarrés avec succès !"
echo "🌐 Frontend : http://localhost:3000"
echo "🔌 Backend  : http://127.0.0.1:3001"
echo ""
echo "📄 Logs disponibles dans le dossier logs/"
echo "🛑 Pour arrêter : ./stop.sh ou Ctrl+C"
echo ""

# Fonction pour arrêter proprement les services
cleanup() {
    echo ""
    echo "🛑 Arrêt des services..."
    
    if [ -f backend.pid ]; then
        kill $(cat backend.pid) 2>/dev/null
        rm -f backend.pid
    fi
    
    if [ -f frontend.pid ]; then
        kill $(cat frontend.pid) 2>/dev/null
        rm -f frontend.pid
    fi
    
    echo "✅ Services arrêtés"
    exit 0
}

# Capturer Ctrl+C
trap cleanup SIGINT

# Attendre que l'utilisateur appuie sur Ctrl+C
echo "Appuyez sur Ctrl+C pour arrêter les services..."
while true; do
    sleep 1
done