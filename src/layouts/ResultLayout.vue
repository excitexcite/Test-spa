<template>
  <TheHeader>
    <div class="header__logo-wrapper">
      <img alt="Site logo" src="@/assets/brain.png" />
    </div>
    <div>
      <p class="header__title">Готово</p>
    </div>
  </TheHeader>

  <main class="page">
    <slot></slot>
  </main>

  <TheFooter>
    <p class="footer__result">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA
      AVETI 18 ANI IMPLINITI,
    </p>

    <!-- Some lorem text -->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolor iste fugiat harum
      ullam, doloremque nihil. Magnam natus omnis dolores ratione, culpa veniam modi et doloremque
      ipsum, nesciunt accusantium in voluptatum! Nemo adipisci excepturi asperiores illo similique
      rem voluptates velit provident distinctio magnam. Officiis, quibusdam ex accusantium deserunt
      dicta voluptatum.
    </p>
  </TheFooter>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>
