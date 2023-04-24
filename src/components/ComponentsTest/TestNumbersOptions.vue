<template>
  <ul class="test__options-list-image test__options-list">
    <li class="test__options-list-item-image" v-for="(option, index) in options" :key="index">
      <label class="test__option-label-image" :for="index">{{ option }}</label>
      <input
        class="test__option-radio-image sr-only"
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
