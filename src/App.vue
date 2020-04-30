<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import 'assets/index.css';
</style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    appNavbar: Navbar,
  }
}
</script>
