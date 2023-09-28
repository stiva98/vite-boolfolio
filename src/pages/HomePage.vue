<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            currentPage: 1,
            lastPage: 1,
            loading: false
        }
    },
    created () {
        this.getPosts();
    },
    mounted() {
        console.log('HomePage')
    },
    methods: {
        getPosts() {
            if (!this.loading) {
                this.loading = true;
                axios
                    .get('http://localhost:8000/api/posts', {
                        params: {
                            page: this.currentPage
                        }
                })
                    .then(res=> {
                        //console.log(res)
                        this.posts = res.data.results.data;
                        this.currentPage = res.data.results.current_page;
                        this.lastPage = res.data.results.last_page;
                        this.loading = false;
                })
            }
        },
        buttonPage (mode) {
            if (!this.loading) {
                    switch (mode) {
                        case '+':
                            if (this.currentPage < this.lastPage) {
                                this.currentPage++;
                                this.getPosts();
                            }
                            break;

                        case '-':
                            if (this.currentPage > 1) {
                                this.currentPage--;
                                this.getPosts();
                            }
                            break;
                };
            }
            //console.log(this.currentPage);
        }
    }
};

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-4 mb-3" v-for="post in posts" :key="post.id">
                <div class="card" style="width: 18rem;">
                    <img :src="'http://localhost:8000/storage/' + post.cover_image" class="card-img-top" :alt="post.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <h3 class="card-title">{{ post.slug }}</h3>
                        <p class="card-text">{{ post.content }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <button type="button" class="btn btn-primary mb-3" @click="buttonPage('-')">&laquo; PREV</button>
            <button type="button" class="btn btn-primary" @click="buttonPage('+')">&raquo; NEXT</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
</style>