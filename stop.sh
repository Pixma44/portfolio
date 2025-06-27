#!/bin/bash

# Script d'arrêt pour le portfolio web

echo "🛑 Arrêt du Portfolio Web"
echo "========================="

# Arrêter le backend
if [ -f backend.pid ]; then
    BACKEND_PID=$(cat backend.pid)
    echo "🦀 Arrêt du backend (PID: $BACKEND_PID)..."
    kill $BACKEND_PID 2>/dev/null
    rm -f backend.pid
    echo "✅ Backend arrêté"
else
    echo "ℹ️  Aucun backend en cours d'exécution"
fi

# Arrêter le frontend
if [ -f frontend.pid ]; then
    FRONTEND_PID=$(cat frontend.pid)
    echo "🖼️  Arrêt du frontend (PID: $FRONTEND_PID)..."
    kill $FRONTEND_PID 2>/dev/null
    rm -f frontend.pid
    echo "✅ Frontend arrêté"
else
    echo "ℹ️  Aucun frontend en cours d'exécution"
fi

# Nettoyer les processus restants
echo "🧹 Nettoyage des processus restants..."
pkill -f "cargo run" 2>/dev/null || true
pkill -f "npm run dev" 2>/dev/null || true
pkill -f "vite" 2>/dev/null || true

echo "✅ Tous les services ont été arrêtés"