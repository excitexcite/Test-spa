<template>
  <TheHeader>
    <div class="header__logo-wrapper">
      <img alt="Site logo" src="@/assets/brain.png" />
    </div>
    <div>
      <p class="header__title">Тест на определение IQ</p>
    </div>
  </TheHeader>

  <main class="page">
    <slot></slot>
  </main>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
</script>
