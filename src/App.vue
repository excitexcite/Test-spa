<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <BaseSpinner />
    </template>
  </Suspense>
</template>
