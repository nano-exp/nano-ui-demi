<script setup>
import Home from './Home.md'
</script>

<template>
  <div class="container">
    <Home class="home"/>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
}

.container > .home {
  padding: 1rem;
}
</style>
