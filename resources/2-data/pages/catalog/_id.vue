<template>
  <div>
    Category id: {{ categoryId }}
  </div>
</template>

<script>
  export default {
    computed: {
      categoryId() {
        return this.$route.params.id
      }
    }
  }
</script>
