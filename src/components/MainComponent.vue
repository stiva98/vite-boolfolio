<script>
export default {
    name: "MainComponent",
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="title text-success text-center">
                <h1>
                    Laravel Boolfolio - API
                </h1>
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
        </div>

        <router-view></router-view>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

main {
    padding: $main-padding;
    .title {
    padding-bottom: 20px;
}
}
</style>