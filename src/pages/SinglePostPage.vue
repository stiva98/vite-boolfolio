<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: null,
            loading: false
        }
    },
    created () {
        this.getPost();
    },
    methods: {
        getPost() {
            if (!this.loading) {
                this.loading = true;
                axios
                    .get('http://localhost:8000/api/posts/' + this.$route.params.slug )
                    .then(res=> {
                        //console.log(res)
                        if (res.data.success) {
                            this.post = res.data.results;
                        }
                        else {
                            this.$router.push({ name: 'notfound' })
                        }
                        this.loading = false;
                    })
            }
        }
    }
};

</script>
<template>
    <template v-if="post">
        <div class="container">
            <div class="row">
                <div class="col-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <img :src="'http://localhost:8000/storage/' + post.cover_image" class="card-img-top" :alt="post.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <h3 class="card-title">{{ $route.params.slug }}</h3>
                            <p class="card-text">{{ post.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
</style>