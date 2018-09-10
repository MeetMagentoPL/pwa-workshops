<template>
  <apollo-query
    :query="query"
    :variables="{ categoryId }"
  >
    <template slot-scope="{ result: { loading, error, data } }">
      <catalog
        v-if="data && !error"
        :products="data.products.items"
        :store-config="data.storeConfig"
        :filters="data.products.filters"
      />
    </template>
  </apollo-query>

</template>

<script>
  import query from '~/graphql/catalog.gql'

  import Catalog from 'alpaca-components/components/04-views/catalog/Catalog.vue'

  export default {
    components: {
      Catalog
    },
    computed: {
      categoryId() {
        return this.$route.params.id
      },
      query() {
        return query
      }
    }
  }
</script>
