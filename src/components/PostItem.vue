<template>
      <div class="post">
      <div>
      <div>Post # {{post.id}}</div>
      <div><strong>Title:</strong>{{post.title}}</div>
<div><strong>Content:</strong>{{post.body}}</div>
      </div>

<div className="post__btns">
<my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
<my-button @click="$emit('remove', post)">Delete</my-button>
</div>
</div>
</template>
<script>
    export default {
         props: {
            post: {
                type: Object,
                requred: true
            }
        }
    }
</script>
<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
}
.post__btns {
    display: flex;
}
</style>