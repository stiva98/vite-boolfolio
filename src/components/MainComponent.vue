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
        </div>
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