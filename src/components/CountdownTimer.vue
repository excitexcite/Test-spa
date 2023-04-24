<template>
  <time>{{ minutes }}:{{ seconds }}</time>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['elapsed'])
const props = defineProps(['time'])

const timer = ref(props.time * 60)

const interval = setInterval(() => {
  if (timer.value === 0) {
    clearInterval(interval)
    emit('elapsed')
  } else {
    timer.value--
  }
}, 1000)

const minutes = computed(() => {
  const time = Math.floor(timer.value / 60)
  return time < 10 ? '0' + time : time
})
const seconds = computed(() => {
  const time = timer.value % 60
  return time < 10 ? '0' + time : time
})
</script>
