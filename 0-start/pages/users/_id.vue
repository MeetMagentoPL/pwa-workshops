<template>
  <pre>{{ user }}</pre>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
    const user = await app.$axios.$get(url)

    return {
      user
    }
  },
  head() {
    return {
      title: `User ${this.user.name}`
    }
  }
}
</script>
