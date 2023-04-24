<template>
  <div class="test__progress-bar" ref="container">
    <span class="test__progress" :style="{ width: progress + 'px' }"></span>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps(['current', 'total'])
const container = ref(null)
const progress = ref(0)
let part

onMounted(() => {
  part = container.value.getBoundingClientRect().width / props.total
  progress.value = part
})

watch(
  () => props.current,
  (state, mutation) => {
    // reset bar with test restart
    if (state === 0) {
      progress.value = part
      return
    }

    if (mutation < props.total - 1) {
      progress.value += part
    }
  }
)
</script>
