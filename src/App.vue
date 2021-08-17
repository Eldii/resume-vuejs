<template>
  <div id="app">
    <div class="container-fluid p-0">
      <NavBar :name="firstname" />
      <transition name="fade">
        <router-view></router-view>
      </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .75s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
