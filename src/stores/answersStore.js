import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAnswersStore = defineStore('answers', () => {
  const answers = ref([])

  function $reset() {
    answers.value = []
  }

  function saveAnswer(answer) {
    this.answers.push(answer)
  }

  return { answers, saveAnswer, $reset }
})
