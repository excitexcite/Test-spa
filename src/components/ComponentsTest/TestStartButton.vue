<template>
  <a
    @click="
      () => {
        answersStore.$reset()
        questionsStore.$reset()
        router.push('/test')
      }
    "
  >
    Пройти тест
  </a>
</template>

<script setup>
import { useAnswersStore } from '@/stores/answersStore'
import { useQuestionsStore } from '@/stores/questionsStore'
import { useRouter } from 'vue-router'

const answersStore = useAnswersStore()
const questionsStore = useQuestionsStore()
const router = useRouter()
</script>
