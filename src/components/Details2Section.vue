<template>
  <div class="details__section2">
    <div class="section__container">
      <h2 class="details__section2-title">
        Также по результатам теста
        <span class="text-bold text-uppercase">вы получите</span> подробные советы по определению
        наиболее перспективной
        <span class="text-bold text-uppercase"
          >для вашего типа <span class="text-lowercase">интеллекта</span> сферы деятельности</span
        >, которая принесет вам скорейший финансовый результат.
      </h2>
      <div class="details__section2-img-wrapper">
        <img class="details__section2-img" src="@/assets/brain2.jpg" alt="" />
      </div>
      <TestStartButton @click="show = false" class="button button-primary" />
    </div>
  </div>
</template>

<script setup>
import TestStartButton from './ComponentsTest/TestStartButton.vue'
</script>

<style>
.details__section2 {
  padding: 40px 0;
  background-color: var(--c-white);
  color: var(--c-black-400);
  text-align: center;
}

.details__section2-title {
  margin-bottom: 30px;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: left;
}

.details__section2-img-wrapper {
  width: 323px;
  height: 180px;
}

.details__section2-img {
  object-fit: contain;
}
</style>
