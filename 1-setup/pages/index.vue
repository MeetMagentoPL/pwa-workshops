<template>
  <container>
    <heading level="1">
      Hello Meet Magento!
    </heading>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </container>
</template>

<script>
  import Container from 'alpaca-components/components/01-globals/container/Container.vue'
  import Heading from 'alpaca-components/components/01-globals/typography/Heading.vue'

  export default {
    components: {
      Container,
      Heading
    }
  }
</script>

