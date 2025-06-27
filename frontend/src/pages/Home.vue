<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Développeur
            <span class="text-primary-600">Full Stack</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Spécialisé en Rust, Vue.js et technologies modernes. 
            Passionné par l'infrastructure, l'embarqué et le développement de jeux.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/projets" class="btn-primary">
              Voir mes projets
            </RouterLink>
            <RouterLink to="/contact" class="btn-secondary">
              Me contacter
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">À propos</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Développeur passionné avec une expertise en développement full-stack, 
            infrastructure cloud, et systèmes embarqués.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="text-4xl mb-4">🔧</div>
            <h3 class="text-xl font-semibold mb-2">Infrastructure</h3>
            <p class="text-gray-600">
              DevOps, Cloud, Docker, Kubernetes, CI/CD
            </p>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-xl font-semibold mb-2">Embarqué</h3>
            <p class="text-gray-600">
              Rust, C/C++, Microcontrôleurs, IoT
            </p>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl mb-4">🎮</div>
            <h3 class="text-xl font-semibold mb-2">Jeux WASM</h3>
            <p class="text-gray-600">
              WebAssembly, Rust, JavaScript, Game Development
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="bg-gray-100 section-padding">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Compétences</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="category in skills" :key="category.name" class="card">
            <h3 class="text-lg font-semibold mb-3">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.items"
                :key="skill"
                class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const skills = [
  {
    name: 'Backend',
    items: ['Rust', 'Axum', 'Node.js', 'Python', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Frontend',
    items: ['Vue.js', 'TypeScript', 'React', 'Tailwind CSS', 'WebAssembly']
  },
  {
    name: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'GitLab CI']
  },
  {
    name: 'Embarqué',
    items: ['C/C++', 'Rust', 'Arduino', 'ESP32', 'Raspberry Pi', 'MQTT']
  }
]
</script>