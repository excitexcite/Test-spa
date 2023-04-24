<template>
  <ul class="test__options-list">
    <li
      v-for="(option, index) in options"
      :key="index"
      class="test__options-list-item"
      :class="picked === index ? 'test__options-list-item--active' : ''"
    >
      <label class="test__option-label" :for="index">{{ option }}</label>
      <input
        class="test__option-radio"
        @change="$emit('selectedOption', picked)"
        type="radio"
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
