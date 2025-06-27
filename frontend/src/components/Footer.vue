<template>
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto section-padding">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <div class="space-y-2 text-gray-300">
            <p>📧 contact@exemple.com</p>
            <p>📱 +33 6 XX XX XX XX</p>
            <p>📍 France</p>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Liens rapides</h3>
          <div class="space-y-2">
            <RouterLink
              v-for="item in quickLinks"
              :key="item.name"
              :to="item.href"
              class="block text-gray-300 hover:text-white transition-colors"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Réseaux sociaux</h3>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-white transition-colors"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; {{ currentYear }} Portfolio. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'CV', href: '/cv' },
  { name: 'Projets', href: '/projets' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
]
</script>