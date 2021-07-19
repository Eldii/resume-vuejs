<template>
  <div id="app">
    <div class="container-fluid p-0">
      <NavBar :name='concatName' />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  firstname: 'Yani',
  lastname: 'OULHADJ',
  components: {
    NavBar
  },
  computed: {
    concatName() {
      return `${this.firstname} ${this.lastname}`
    }
  }
}
</script>

<style>
@import './assets/scss/styles.scss';
</style>
