<template>
  <container>
    <heading level="1">
      Hello Meet Magento!
      {{ storeConfig }}
    </heading>
  </container>
</template>

<script>
  import Container from 'alpaca-components/components/01-globals/container/Container.vue'
  import Heading from 'alpaca-components/components/01-globals/typography/Heading.vue'

  import gql from 'graphql-tag'

  export default {
    components: {
      Container,
      Heading
    },
    data() {
      return {
        storeConfig: '',
        products: ''
      }
    },
    apollo: {
      storeConfig: gql`{ storeConfig { base_media_url }}`,
      products: gql`{products(filter: {category_id: {eq: "2"}}) { total_count }}`
    }
  }
</script>
