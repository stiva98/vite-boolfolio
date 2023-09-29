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
                        this.loading = false;
                    })
                    .catch(err=> {
                        //console.log(err)
                        if (err.response.status == 404) {
                            this.$router.push({ name: 'notfound' })
                        }
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
                        <template v-if="post.full_cover_image">
                            <img :src="post.full_cover_image" class="card-img-top" :alt="post.title">
                        </template>
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <h3 class="card-title">{{ $route.params.slug }}</h3>
                            <p class="card-text">{{ post.content }}</p>
                            <router-link :to="{ name:'posts' }">
                                Torna a tutti i post
                            </router-link>
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