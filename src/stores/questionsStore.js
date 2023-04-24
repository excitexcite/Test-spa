import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', () => {
  const questions = ref([])
  const currentQuestion = ref(0)

  function $reset() {
    currentQuestion.value = 0
  }

  async function fetchQuestions() {
    try {
      questions.value = (await import('@/data/questions.json')).default
    } catch (e) {
      console.log(e)
    }
  }

  function isLast() {
    return questions.value.length - 1 === currentQuestion.value
  }

  return { questions, currentQuestion, isLast, fetchQuestions, $reset }
})
