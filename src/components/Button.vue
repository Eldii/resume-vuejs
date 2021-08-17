<template>
    <div class="social-icons">
        <a v-for="(social, index) in socials" :key="index" class="social-icon" :href="social.link"><i :class="getIcons(social.icon)"></i></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socials: [
                {
                    value: 'github',
                    icon: 'fa-github',
                    link: '#'
                },
                {
                    value: 'linkedin',
                    icon: 'fa-linkedin-in',
                    link: 'https://www.linkedin.com/in/yani-oulhadj-371342116/'
                }
            ]
        }
    },
    computed: {
        getIcons(icon) {
            return `fab ${icon}`
        }
    }
}
</script>

<style lang="scss" scoped>

</style>