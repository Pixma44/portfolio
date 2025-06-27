<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto section-padding">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
          </p>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto section-padding">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Nom complet *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                :class="{ 'border-red-300': errors.name }"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                :class="{ 'border-red-300': errors.email }"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                :class="{ 'border-red-300': errors.subject }"
              />
              <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                :class="{ 'border-red-300': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span v-if="isSubmitting" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="mt-6">
            <div
              class="p-4 rounded-md"
              :class="[
                submitSuccess 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              ]"
            >
              {{ submitMessage }}
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Informations de contact</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <EnvelopeIcon class="h-5 w-5 text-primary-600" />
                <span class="text-gray-700">contact@exemple.com</span>
              </div>
              <div class="flex items-center gap-3">
                <PhoneIcon class="h-5 w-5 text-primary-600" />
                <span class="text-gray-700">+33 6 XX XX XX XX</span>
              </div>
              <div class="flex items-center gap-3">
                <MapPinIcon class="h-5 w-5 text-primary-600" />
                <span class="text-gray-700">France</span>
              </div>
            </div>
          </div>

          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
            <div class="space-y-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <span class="text-xl">{{ social.icon }}</span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>

          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Disponibilité</h3>
            <p class="text-gray-700 mb-2">
              Je suis actuellement disponible pour de nouveaux projets.
            </p>
            <p class="text-gray-600 text-sm">
              Temps de réponse moyen : 24-48 heures
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import type { ContactMessage } from '@/types'

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const form = reactive<ContactMessage>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = [
  { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
]

const validateForm = (): boolean => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'L\'email est requis'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email invalide'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Le sujet est requis'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Le message est requis'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await axios.post('/api/contact', form)
    
    if (response.data.success) {
      submitSuccess.value = true
      submitMessage.value = 'Message envoyé avec succès ! Je vous répondrai bientôt.'
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key as keyof typeof form] = ''
      })
    } else {
      throw new Error(response.data.message || 'Erreur lors de l\'envoi')
    }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}
</script>