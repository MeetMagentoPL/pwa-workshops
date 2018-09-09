<template>
  <catalog
    :products="products.items"
    :store-config="storeConfig"
    :filters="products.filters"
  />
</template>

<script>
  import data from 'alpaca-components/data/catalog.json'

  import Catalog from 'alpaca-components/components/04-views/catalog/Catalog.vue'

  export default {
    components: {
      Catalog
    },
    data() {
      return data
    }
  }
</script>
