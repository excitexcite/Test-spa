<template>
  <footer class="footer">
    <div class="footer__container">
      <slot></slot>
    </div>
  </footer>
</template>

<style>
.footer__result {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff80;

  transform: translateY(-50%);
}

.footer__copy {
  color: #ffffff80;
  font-family: Roboto;
  font-size: 10px;
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 13px;
}
</style>
