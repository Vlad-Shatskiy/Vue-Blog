<template>
    <div>
    <h1>Post page</h1>
    <my-input placeholder="Search..." v-model="searchQuery"/>
    <div className="app__btns">
    <my-button @click="showDialog">Create post</my-button>
    <my-select v-model='selectedSort' :options="sortOptions"/>
    </div>
    <my-dialog v-model:show="dialogVisible">
    <post-form  @create="createPost"/>
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading"/>
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper">
    <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{'current-page': page === pageNumber}" @click="changePage(pageNumber)">{{pageNumber}}</div>
    </div> -->
    </div>
</template>
<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';
    export default {
        components : {
            PostForm, PostList
        },
        data() {
            return {
              posts: [],
                dialogVisible: false,
                isPostsLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions: [
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By content'},

                ]
                }},
        methods: {
           createPost(post) {
              this.posts = [post, ...this.posts];
              this.dialogVisible= false;},
            removePost(post){
                this.posts = this.posts.filter(p => p.id !== post.id)},
            showDialog(){
                this.dialogVisible = true;
            },
            // changePage(pageNumber){
            //     this.page = pageNumber;
            // },
            async fetchPosts() {
                try {
                    this.isPostsLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data;
                } catch (e){
                    alert(e)
                } finally {
                    this.isPostsLoading = false;
                }
                },
                            async loadMorePosts() {
                try {
                    this.page +=1;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data];
                } catch (e){
                    alert(e)
                } 
                }
               
            },
                mounted() {
                    this.fetchPosts();                 
                },
                computed: {
                    sortedPosts(){
                        return [...this.posts].sort((post1,post2) => {
                            return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
                        })
                    },
                    sortedAndSearchedPosts(){
                        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
                    }
                },
                watch: {
                    // page(){
                    //     this.fetchPosts()
                    // }
                }
                }
</script>
<style scoped>

.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 2px solid teal;
}

</style>