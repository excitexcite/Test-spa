<template>
  <div class="result__response response">
    <div class="response__container">
      <ul class="result__response-list">
        <li v-for="(item, index) in resultList" :key="index" class="result__response-list-item">
          <template v-if="Array.isArray(item.value)">
            <p class="result__response-option">{{ item.key }}:</p>
            <ul class="result__response-sublist">
              <li
                class="result__response-sublist-item"
                v-for="(item, index2) in item.value"
                :key="index2"
              >
                <a class="result__response-link" :href="item">{{ item }}</a>
              </li>
            </ul>
          </template>

          <template v-else>
            {{ item.key }}:
            <template v-if="isLink(item.value)">
              <a class="result__response-link" :href="item.value">{{ item.value }}</a>
            </template>
            <template v-else> {{ item.value }} </template>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { isLink } from '../helpers.js'

defineProps(['resultList'])
</script>

<style>
.result__response {
  margin-block: 20px;
}

.response {
  font-size: 14px;
  font-family: 'PT Serif', sans-serif;
}

.result__response-sublist {
  margin-left: 10px;
}

.result__response-link {
  color: var(--c-yellow);
}

.result__response-link:hover {
  text-decoration: underline;
}
</style>
