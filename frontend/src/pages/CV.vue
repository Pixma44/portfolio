<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto section-padding">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <div class="flex justify-center gap-4">
            <button
              @click="toggleLanguage"
              class="btn-secondary flex items-center gap-2"
            >
              <GlobeAltIcon class="h-5 w-5" />
              {{ currentLang === 'fr' ? 'English' : 'Français' }}
            </button>
            <button
              @click="downloadCV"
              class="btn-primary flex items-center gap-2"
            >
              <DocumentArrowDownIcon class="h-5 w-5" />
              {{ currentLang === 'fr' ? 'Télécharger le CV (PDF)' : 'Download CV (PDF)' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CV Content -->
    <div class="max-w-4xl mx-auto section-padding">
      <!-- Personal Info -->
      <section class="card mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <img 
              v-if="personalInfo.profilePhoto" 
              :src="personalInfo.profilePhoto" 
              :alt="personalInfo.name" 
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <UserIcon class="h-16 w-16 text-gray-400" style="display: none;" />
          </div>
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ personalInfo.name }}</h2>
            <p class="text-lg text-primary-600 mb-2">{{ t(personalInfo.title) }}</p>
            <div class="text-gray-600 space-y-1">
              <p>📧 {{ personalInfo.email }}</p>
              <p>📱 {{ personalInfo.phone }}</p>
              <p>📍 {{ t(personalInfo.location) }}</p>
              <p v-if="personalInfo.linkedin">💼 <a :href="personalInfo.linkedin" target="_blank" class="text-primary-600 hover:underline">LinkedIn</a></p>
              <p v-if="personalInfo.github">🐙 <a :href="personalInfo.github" target="_blank" class="text-primary-600 hover:underline">GitHub</a></p>
            </div>
          </div>
        </div>
      </section>

      <!-- Professional Experience -->
      <section class="card mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-8">{{ currentLang === 'fr' ? 'Expérience professionnelle' : 'Professional Experience' }}</h3>
        <div class="space-y-8">
          <div v-for="exp in experiences" :key="exp.id" class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <!-- Header with logo and title -->
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    v-if="exp.logo" 
                    :src="exp.logo" 
                    :alt="exp.company + ' logo'" 
                    class="w-12 h-12 object-contain"
                    @error="handleImageError"
                  />
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-bold text-lg hidden fallback-logo">
                    {{ exp.company.charAt(0) }}
                  </div>
                </div>
              </div>
              
              <div class="flex-1 min-w-0">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <h4 class="text-xl font-bold text-gray-900 mb-1 lg:mb-0">{{ exp.title }}</h4>
                  <span class="text-sm text-gray-500 lg:text-right">{{ exp.period }}</span>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <p class="text-lg font-semibold text-primary-600">{{ exp.company }}</p>
                  <div class="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span v-if="exp.location" class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                      {{ exp.location }}
                    </span>
                    <span v-if="exp.contractType" class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                      {{ exp.contractType }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-700 mb-4 leading-relaxed">{{ exp.description }}</p>
            
            <!-- Actions/Bullet points -->
            <div v-if="exp.actions && exp.actions.length > 0" class="mb-4">
              <h5 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">{{ currentLang === 'fr' ? 'Réalisations principales' : 'Key Achievements' }}</h5>
              <ul class="space-y-2">
                <li v-for="action in exp.actions" :key="action" class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span class="text-gray-700 leading-relaxed">{{ action }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Technologies -->
            <div>
              <h5 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">{{ currentLang === 'fr' ? 'Technologies' : 'Technologies' }}</h5>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="card mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ currentLang === 'fr' ? 'Formation' : 'Education' }}</h3>
        <div class="space-y-4">
          <div v-for="edu in education" :key="edu.id" class="border-l-2 border-primary-200 pl-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 class="text-lg font-semibold text-gray-900">{{ edu.degree }}</h4>
              <span class="text-sm text-gray-500">{{ edu.period }}</span>
            </div>
            <p class="text-primary-600 font-medium mb-2">{{ edu.school }}</p>
            <p v-if="edu.description" class="text-gray-700">{{ edu.description }}</p>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="card">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ currentLang === 'fr' ? 'Compétences techniques' : 'Technical Skills' }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="category in skillCategories" :key="t(category.name)">
            <h4 class="font-semibold text-gray-900 mb-3">{{ t(category.name) }}</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Languages -->
      <section class="card mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ currentLang === 'fr' ? 'Langues' : 'Languages' }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="language in languages" :key="language.name" class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span class="font-medium text-gray-900">{{ language.name }}</span>
            <span class="text-sm text-gray-600">{{ t(language.level) }}</span>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section v-if="certifications.length > 0" class="card">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ currentLang === 'fr' ? 'Certifications' : 'Certifications' }}</h3>
        <div class="space-y-4">
          <div v-for="cert in certifications" :key="cert.id" class="border-l-2 border-primary-200 pl-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 class="text-lg font-semibold text-gray-900">{{ cert.name }}</h4>
              <span class="text-sm text-gray-500">{{ cert.date }}</span>
            </div>
            <p class="text-primary-600 font-medium mb-2">{{ cert.issuer }}</p>
            <div v-if="cert.score || cert.level" class="text-sm text-gray-600 mb-2">
              <span v-if="cert.score">Score: {{ cert.score }}</span>
              <span v-if="cert.level">Niveau: {{ cert.level }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Achievements -->
      <section class="card mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ currentLang === 'fr' ? 'Réalisations' : 'Achievements' }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="achievement in achievements" :key="achievement" class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span class="text-primary-600 mt-1">✓</span>
            <span class="text-gray-700">{{ achievement }}</span>
          </div>
        </div>
      </section>

      <!-- Interests -->
      <section class="card">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ currentLang === 'fr' ? 'Centres d\'intérêt' : 'Interests' }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="interest in interests" :key="t(interest.category)" class="">
            <h4 class="font-semibold text-gray-900 mb-3">{{ t(interest.category) }}</h4>
            <div class="space-y-2">
              <div v-for="item in interest.items" :key="item" class="flex items-center gap-2">
                <span class="w-2 h-2 bg-primary-600 rounded-full"></span>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { DocumentArrowDownIcon, UserIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
import type { Experience, Education, Language, Certification, Interest } from '@/types'
import { 
  personalInfo, 
  experiences, 
  education, 
  skillCategories, 
  languages, 
  certifications,
  achievements,
  interests
} from '@/data/cv-data'

const currentLang = ref<'fr' | 'en'>('fr')

const downloadCV = () => {
  const filename = currentLang.value === 'fr' ? 'CV-Pointet-04-25-FR.pdf' : 'CV-Pointet-04-25-EN.pdf'
  const link = document.createElement('a')
  link.href = `/${filename}`
  link.download = filename
  link.click()
}

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'fr' ? 'en' : 'fr'
}

const t = (text: { fr: string; en: string } | string) => {
  if (typeof text === 'string') return text
  return text[currentLang.value]
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target) {
    target.style.display = 'none'
    const fallback = target.nextElementSibling as HTMLElement
    if (fallback) {
      fallback.classList.remove('hidden')
      fallback.classList.add('flex')
    }
  }
}

</script>