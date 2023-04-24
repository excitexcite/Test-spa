<template>
  <div class="test__image-wrapper">
    <img :src="`src/assets/${question.imgName}`" alt="Изображение для вопроса" />
  </div>
</template>

<script setup>
defineProps(['question'])
</script>
