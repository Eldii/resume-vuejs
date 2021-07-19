<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">{{ name }}</span>
          <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/0.jpg" alt=""></span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <router-link v-for="(link, index) in links" :key="index" :to="link.href" exact v-slot="{ href, navigate, isActive, isExactActive }" custom>
              <li :class="'nav-item ' + [isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                <a class="nav-link js-scroll-trigger" :href="href" @click="navigate">{{ link.value }}</a>
              </li>
            </router-link>
          </ul>
        </div>
    </nav>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      links: [
        {
          value: 'À propos',
          href: '/'
        },
        {
          value: 'Expériences',
          href: '/experiences'
        },
        {
          value: 'Etudes',
          href: '/studies'
        },
        {
          value: 'Compétences',
          href: '/skills'
        },
        {
          value: 'Centres d\'interêt',
          href: '/hobbies'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>