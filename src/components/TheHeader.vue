<template>
  <header class="header">
    <div class="header__container">
      <TheHeaderMenu />
      <slot></slot>
    </div>
  </header>
</template>

<script setup>
import TheHeaderMenu from './TheHeaderMenu.vue'
</script>

<style>
.header {
  position: fixed;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: var(--c-black-500);
}

.header__container {
  display: flex;
  column-gap: 8px;
  align-items: center;
  padding-inline: 15px;
  max-width: 768px !important;
  min-height: 46px;
}

.header__logo-wrapper {
  display: block;
  width: 46px;
  height: 46px;
}

.header__title {
  font-family: 'Yeseva One';
  color: var(--c-yellow);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
