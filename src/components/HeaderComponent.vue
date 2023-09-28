<script>
export default {
    name: "HeaderComponent",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="title text-success text-center">
                <h1>
                    Laravel Boolfolio - API
                </h1>
            </div>
        </div>
        <router-link :to="{ name:'home' }">
                Homepage
            </router-link>
            &nbsp;
            <router-link :to="{ name:'about' }">
                Chi siamo
            </router-link>
            &nbsp;
            <router-link :to="{ name:'posts' }">
                Tutti i post
            </router-link>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
header {
    padding: 40px;
    text-align: center;
}
main {
    padding: $main-padding;
    .title {
    padding-bottom: 20px;
}
}
</style>