<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto section-padding">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations dans les domaines de l'infrastructure, 
            l'embarqué et le développement de jeux.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div class="flex justify-center">
        <div class="flex space-x-1 bg-gray-200 p-1 rounded-lg">
          <button
            v-for="category in categories"
            :key="category.key"
            @click="activeCategory = category.key"
            class="px-4 py-2 rounded-md font-medium transition-colors"
            :class="[
              activeCategory === category.key
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="max-w-7xl mx-auto section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="card group hover:shadow-lg transition-shadow duration-300"
        >
          <div class="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <div class="text-4xl">{{ getCategoryIcon(project.category) }}</div>
          </div>
          
          <div class="mb-3">
            <span
              class="inline-block px-2 py-1 text-xs font-medium rounded-full"
              :class="getCategoryColor(project.category)"
            >
              {{ getCategoryLabel(project.category) }}
            </span>
          </div>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {{ project.title }}
          </h3>
          
          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
            >
              {{ tech }}
            </span>
          </div>
          
          <div class="flex gap-3 mt-auto">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <CodeBracketIcon class="h-4 w-4" />
              Code
            </a>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowTopRightOnSquareIcon class="h-4 w-4" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import type { Project } from '@/types'

const activeCategory = ref<string>('all')

const categories = [
  { key: 'all', label: 'Tous' },
  { key: 'infrastructure', label: 'Infrastructure' },
  { key: 'embedded', label: 'Embarqué' },
  { key: 'game', label: 'Jeux WASM' },
]

const projects: Project[] = [
  {
    id: '1',
    title: 'Plateforme DevOps',
    description: 'Infrastructure complète avec CI/CD, monitoring et déploiement automatisé sur Kubernetes.',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana'],
    category: 'infrastructure',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: '2',
    title: 'Station météo IoT',
    description: 'Station météorologique connectée avec capteurs multiples et interface web temps réel.',
    technologies: ['Rust', 'ESP32', 'MQTT', 'InfluxDB', 'Vue.js'],
    category: 'embedded',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Jeu de Puzzle WASM',
    description: 'Jeu de puzzle interactif développé en Rust et compilé en WebAssembly pour le web.',
    technologies: ['Rust', 'WebAssembly', 'Canvas API', 'TypeScript'],
    category: 'game',
    githubUrl: 'https://github.com',
    liveUrl: 'https://game-demo.com'
  },
  {
    id: '4',
    title: 'Cluster Kubernetes',
    description: 'Cluster Kubernetes haute disponibilité avec GitOps et monitoring avancé.',
    technologies: ['Kubernetes', 'ArgoCD', 'Helm', 'Istio', 'Prometheus'],
    category: 'infrastructure',
    githubUrl: 'https://github.com'
  },
  {
    id: '5',
    title: 'Robot autonome',
    description: 'Robot mobile autonome avec navigation SLAM et contrôle à distance.',
    technologies: ['C++', 'ROS2', 'Raspberry Pi', 'OpenCV', 'LIDAR'],
    category: 'embedded',
    githubUrl: 'https://github.com'
  },
  {
    id: '6',
    title: 'RPG Browser Game',
    description: 'Jeu de rôle complet dans le navigateur avec système de combat et quêtes.',
    technologies: ['Rust', 'WebAssembly', 'WebGL', 'JavaScript'],
    category: 'game',
    githubUrl: 'https://github.com',
    liveUrl: 'https://rpg-demo.com'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    infrastructure: '🔧',
    embedded: '⚡',
    game: '🎮'
  }
  return icons[category] || '📦'
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    infrastructure: 'Infrastructure',
    embedded: 'Embarqué',
    game: 'Jeu WASM'
  }
  return labels[category] || category
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    infrastructure: 'bg-blue-100 text-blue-700',
    embedded: 'bg-green-100 text-green-700',
    game: 'bg-purple-100 text-purple-700'
  }
  return colors[category] || 'bg-gray-100 text-gray-700'
}
</script>