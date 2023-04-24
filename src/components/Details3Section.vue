<template>
  <div class="details__section3">
    <div class="section__container">
      <h2 class="details__section3-title">
        Прохождение теста займет у вас не более
        <span class="text-colored text-bold">12 минут</span>, а его
        <span class="text-bold">результаты</span> вы сможете
        <span class="text-colored text-bold"> использовать всю жизнь. </span>
      </h2>
      <p class="details__interpretation">
        Профессиональная интерпретация и детально
        <span class="text-semibold">проработанные рекомендации</span> позволят вам качественно
        изменить <span class="text-semibold">все аспекты своей жизни</span>: от финансового до
        любовного.
      </p>
      <TestStartButton class="button button-outlined" />
    </div>
  </div>
</template>

<script setup>
import TestStartButton from './ComponentsTest/TestStartButton.vue'
</script>

<style>
.details__section3 {
  font-family: Merriweather, serif;
  padding: 54px 0;
}

.details__section3-title {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1px;
  max-width: 260px;
  align-self: start;
}

.details__interpretation {
  padding: 30px 14px;
  margin: 14px 0 33px;
  border-radius: 20px;
  background-color: #f3f3f2cc;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 1px;
  color: var(--c-black-500);
}
</style>
