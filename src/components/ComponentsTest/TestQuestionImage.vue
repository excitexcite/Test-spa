<template>
  <div class="test__image-wrapper">
    <img :src="getImgUrl(question.imgName)" alt="Изображение для вопроса" />
  </div>
</template>

<script setup>
defineProps(['question'])
// const props = defineProps(['question'])

const getImgUrl = (imageNameWithExtension) =>
  new URL(`../../assets/${imageNameWithExtension}`, import.meta.url).href
</script>
