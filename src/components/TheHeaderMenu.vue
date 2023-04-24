<template>
  <div class="header_menu">
    <MenuButton @click="show = !show" />
    <nav class="menu" :class="{ 'menu--active': show }">
      <CloseButton class="menu__close" @click="show = !show" />
      <ul class="menu__list">
        <li class="menu__list-item">
          <RouterLink @click="show = false" class="menu__link" to="/">Главная</RouterLink>
        </li>
        <li class="menu__list-item">
          <RouterLink @click="show = false" class="menu__link" to="/"
            >Информация о тесте</RouterLink
          >
        </li>
        <li class="menu__list-item">
          <TestStartButton @click="show = false" class="menu__link" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import CloseButton from './CloseButton.vue'
import MenuButton from './MenuButton.vue'
import TestStartButton from './ComponentsTest/TestStartButton.vue'

import { useScrollLock } from '@vueuse/core'
import { ref, watch } from 'vue'

const show = ref(false)
const scrollLocked = useScrollLock(document.querySelector('body'))
watch(show, () => (scrollLocked.value = show.value))
</script>

<style>
.menu {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 60px 24px;
  background-color: var(--c-black-500);

  visibility: hidden;
  transform: translateX(-150%);
  transition: transform 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
  z-index: 10;
}

.menu--active {
  transform: translateX(0);
  visibility: visible;
}

.menu__close {
  position: absolute;
  top: 18px;
  right: 13px;
}

.menu__list {
  display: flex;
  flex-direction: column;
  gap: 17px;
  font-family: Roboto;
  font-weight: 300;
  line-height: 20px;
}

.menu__link {
  display: inline-flex;
  padding: 5px;
}
</style>
