<template>
  <div class="page-wrapper">
    <alpaca-header />
    <nuxt />
  </div>
</template>

<script>
  import AlpacaHeader from '~/components/03-modules/header/Header.vue'

  export default {
    components: {
      AlpacaHeader
    }
  }
</script>

<style>
  *:focus {
    outline: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    min-width: 320px;
    font-family: var(--font-family-base);
    font-weight: var(--font-weight-base);
    font-size: var(--font-size-base);
    color: var(--font-color-base);
  }

  body {
    display: flex;
    flex-direction: column;
  }

  .page-wrapper {
    flex: 1 0 auto;
  }

  p {
    margin: 0;
    padding: 0;
  }

  dl,
  dt,
  dd {
    margin: 0;
  }
</style>
