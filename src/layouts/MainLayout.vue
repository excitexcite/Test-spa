<template>
  <TheHeader />

  <main class="page">
    <slot></slot>
  </main>

  <TheFooter>
    <p class="footer__copy">&copy; 2019</p>
  </TheFooter>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>
