<template>
  <ResultLayout>
    <section class="result">
      <div class="result__container">
        <h1 class="result__title">Ваш результат рассчитан:</h1>
        <p class="result__subtitle">
          <span class="text-underlined">Вы относитесь к 3%</span> респондентов, чей уровень
          интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
        </p>
        <p class="result__get-result">Скорее получите свой результат!</p>
        <p class="result__disclaimer">
          В целях защиты персональных данных результат теста, их подробная интерпретация и
          рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
        </p>
        <p class="result__make-call">
          Звоните скорее, запись доступна всего
          <CountdownTimer @elapsed="ctaIsActive = false" time="10" class="result__timer" /> минут
        </p>
        <button
          class="result__cta"
          @click="getResult"
          :disabled="!ctaIsActive"
          :class="!ctaIsActive ? 'button-disabled' : ''"
        >
          <IconPhone />
          Позвонить и прослушать результат
        </button>

        <template v-if="responseLoading">
          <div class="result__spinner">
            <BaseSpinner />
          </div>
        </template>
        <template v-else-if="!responseLoading && resultList.length">
          <ResultDataList :resultList="resultList" />
        </template>
      </div>
    </section>
  </ResultLayout>
</template>

<script setup>
import CountdownTimer from '@/components/CountdownTimer.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import ResultLayout from '@/layouts/ResultLayout.vue'
import ResultDataList from '../components/ResultDataList.vue'
import { ref } from 'vue'

const ctaIsActive = ref(true)
const responseLoading = ref(false)
const resultList = ref([])

async function getResult() {
  responseLoading.value = true
  const response = await fetch('https://swapi.dev/api/people/1/')
  if (response.ok) {
    const data = await response.json()

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const value = data[key]
        const parsedKey = key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')

        resultList.value.push({
          key: parsedKey,
          value: value.length ? value : 'none'
        })
      }
    }
  } else {
    console.log('Error while getting data')
  }
  responseLoading.value = false
}
</script>

<style>
.result {
  padding-top: 46px;
  min-height: 100svh;
}
.result__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result__title {
  margin: 30px 0 12px;
  font-weight: 700;
  line-height: 16px;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.result__subtitle {
  margin-bottom: 22px;
  font-size: 14px;
  text-align: center;
}

.result__get-result {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  color: var(--c-green);
}

.result__disclaimer {
  max-width: 260px;
  margin-bottom: 10px;
  background-color: #1c2741;
  padding: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
}

.result__make-call {
  max-width: 240px;
  text-align: center;
  color: var(--c-green);
  font-size: 11px;
}

.result__timer {
  font-size: 20px;
  line-height: 30px;
}

.result__cta {
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 290px;
  border-radius: 5px;
  margin-top: 10px;
  color: var(--c-white);
  background-color: var(--c-red);
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  padding: 28px 15px;
}

.result__spinner {
  margin-block: 20px;
}
</style>
