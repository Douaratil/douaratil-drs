<template>
  <div class="404 d-flex align-center flex-column">
    <h1>404</h1>
    <p>Oh, il semble que vous vous soyez égaré...</p>
    <router-link :to="{ path: '/' }">Revenez vers la lumière</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
