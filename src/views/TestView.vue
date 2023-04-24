<template>
  <TestLayout>
    <section class="test">
      <div class="test__container">
        <BaseProgressBar :current="index" :total="questions.length" />

        <template v-if="processingResult">
          <h1 class="test__process-title">Обработка результатов</h1>
          <BaseSpinner />
          <p class="test__process-subtitle">Определение стиля мышления...</p>
        </template>

        <template v-else>
          <h1 class="test__question">{{ question.question }}</h1>
          <TestQuestionImage v-if="question.imgName" :question="question" />

          <!-- Conditionally render needed questions options component -->
          <component
            :is="optionsComponent"
            :key="index"
            @selected-option="(option) => (answer = option)"
            :options="question.options"
          ></component>

          <button
            @click="processAnswer"
            class="button test__next-button"
            :class="answer !== null ? 'button-primary' : 'button-primary--disabled'"
          >
            Далее
          </button>
        </template>
      </div>
    </section>
  </TestLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

import TestListOptions from '../components/ComponentsTest/TestListOptions.vue'
import TestColorsOptions from '../components/ComponentsTest/TestColorsOptions.vue'
import TestNumbersOptions from '../components/ComponentsTest/TestNumbersOptions.vue'
import TestQuestionImage from '../components/ComponentsTest/TestQuestionImage.vue'
import BaseProgressBar from '../components/UI/BaseProgressBar.vue'
import TestLayout from '../layouts/TestLayout.vue'

import { useQuestionsStore } from '../stores/questionsStore'
import { useAnswersStore } from '../stores/answersStore'
import { useRouter } from 'vue-router'
import { delay } from '../helpers.js'

const questionsStore = useQuestionsStore()
const answersStore = useAnswersStore()
const router = useRouter()

const questions = ref([])
const loading = ref(true)
const answer = ref(null)
const processingResult = ref(false)

// immitate fetch questions data from API
await questionsStore.fetchQuestions()
questions.value = questionsStore.questions
loading.value = false

const index = computed(() => questionsStore.currentQuestion)
const question = computed(() => questions.value[index.value])

const optionsComponent = computed(() => {
  if (question.value.optionsType === 'numbers') {
    return TestNumbersOptions
  } else if (question.value.optionsType === 'colors') {
    return TestColorsOptions
  } else {
    return TestListOptions
  }
})

function processAnswer() {
  if (!questionsStore.isLast()) {
    nextQuestions()
  } else {
    saveQuestion()

    processingResult.value = true

    delay(5000).then(() => {
      questionsStore.currentQuestion = 0
      router.push('/result')
    })
  }
}

function nextQuestions() {
  saveQuestion()
  questionsStore.currentQuestion++
}

function saveQuestion() {
  answersStore.saveAnswer(answer.value)
  answer.value = null
}
</script>

<style>
.test {
  padding-top: 46px;
}

.test__container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test__progress-bar {
  width: 260px;
  height: 11px;
  border-radius: 10.5px;
  margin: 17px 0;
  background-color: #f2f3f3;
}

.test__progress {
  display: block;
  background-color: var(--c-green);
  height: 11px;
  border-radius: 10.5px;
}

.test__question {
  font-size: 18px;
  line-height: 26.5px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-align: center;
}

.test__next-button {
  margin-top: auto;
  margin-bottom: 20px;
}

.test__options-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-bottom: 20px;
}

.test__options-list-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 7px 10px 7px 35px;
  background-color: rgb(242, 243, 243, 0.15);
}

.test__options-list-item--active {
  background-color: var(--c-yellow);
  color: var(--c-black-500);
}

.test__option-label {
  display: flex;
  flex-basis: 100%;
  font-size: 18px;
  min-height: 35px;
  align-items: center;
}

.test__option-radio {
  order: -1;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
}

.test__option-radio:checked::before {
  content: '';
  display: flex;
  background-color: var(--c-blue);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

.test__process-title {
  font-family: 'PT Serif';
  font-weight: 400;
  font-size: 23px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.8px;
  margin-bottom: 30px;
  max-width: 240px;
}

.test__process-subtitle {
  font-family: 'PT Serif';
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.8px;
  max-width: 280px;
  margin-top: 30px;
}

.test__options-list-colors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 21px;
  row-gap: 24px;
  margin: 15px 0;
}

.test__options-list-item-colors {
  position: relative;
  display: inline-flex;
  width: 75px;
  height: 75px;
}

.test__option-label-color {
  width: 100%;
  height: 100%;
}

.test__option-radio-color::before {
  display: none;
}

.test__option-radio-color:checked::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background-color: transparent;
  width: 75px;
  height: 75px;
  border: 5px solid var(--c-yellow);
}

.test__image-wrapper {
  margin-bottom: 20px;
}

.test__options-list-image {
  flex-direction: row;
  justify-content: center;
}

.test__options-list-item-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  background-color: var(--c-white);
}

.test__option-label-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--c-black-500);
  font-size: 20px;
}

.test__option-radio-image:checked::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background-color: transparent;
  width: 41px;
  height: 41px;
  border: 5px solid var(--c-yellow);
}
</style>
