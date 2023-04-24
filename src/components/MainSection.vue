<template>
  <section class="main">
    <div class="section__container main__container">
      <p class="main__pass-test">Пройдите точный и быстрый</p>
      <h1 class="main__title">Тест на определение IQ</h1>
      <div class="main__img-wrapper">
        <img class="main__img" src="@/assets/brain.png" alt="Brain image" />
      </div>
      <RouterLink to="/test" class="button button-primary">Пройти тест</RouterLink>
      <p class="main__recomendations">
        <span class="main__recomendations--colored">
          И получите рекомендации по развитию своего интеллекта
        </span>
        и улучшению финансового благосостояния и личной жизни
      </p>
      <div class="main__details-wrapper">
        <button class="main__details-button">
          <IconArrow />
        </button>
        <p class="main__detail-text">Подробнее</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconArrow from './icons/IconArrow.vue'
</script>

<style>
.main {
  padding-top: 46px;
}

.main__container {
  min-height: 525px;
}

.main__pass-test {
  font-size: 18px;
  letter-spacing: 2px;
  margin: 15px 0;
}

.main__img-wrapper {
  display: block;
  position: relative;
  width: 120px;
  height: 110px;
  margin-top: 16px;
  margin-bottom: 30px;
}

.main__img {
  position: absolute;
  top: 0;
  left: -10px;
}

.main__title {
  max-width: 270px;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--c-yellow);
}

.main__recomendations {
  margin: 20px 0;
  font-size: 15px;
  font-weight: 900;
  line-height: 19px;
  text-align: center;
  letter-spacing: 1px;
}

.main__recomendations--colored {
  color: var(--c-yellow);
}

.main__detail-text {
  font-size: 8px;
  line-height: 10.6px;
  letter-spacing: 1px;
  margin-top: 6px;
}

.main__details-button {
  margin: 0 auto;
  background-color: var(--c-white);
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  border-radius: 50%;
}
</style>
