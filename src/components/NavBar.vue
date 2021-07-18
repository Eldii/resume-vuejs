<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Yani OULHADJ</span>
          <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/0.jpg" alt=""></span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <router-link to="/" exact>À propos</router-link>
            <router-link to="/experiences" exact>Expériences</router-link>
            <router-link to="/studies" exact>Etudes</router-link>
            <router-link to="/skills" exact>Compétences</router-link>
            <router-link to="/hobby" exact>Centres d'interêt</router-link>
          </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>