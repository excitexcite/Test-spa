<template>
  <ul class="test__options-list-colors">
    <li v-for="(option, index) in options" :key="index" class="test__options-list-item-colors">
      <label
        class="test__option-label-color"
        :for="index"
        :style="{ 'background-color': option }"
      ></label>
      <input
        class="test__option-radio-color"
        type="radio"
        @change="$emit('selectedOption', picked)"
        :id="index"
        :value="index"
        v-model="picked"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['options'])
const picked = ref(null)
</script>
