<template>
    <div class="navbar">
    <div  @click="$router.push('/')" class="navbar__header">v-blog</div>
    <div class="navbar__btns">
    <my-button @click="$router.push('/posts')">Posts</my-button>
    <my-button @click="$router.push('/store')" style="margin-left: 20px">store</my-button>
    <my-button @click="$router.push('/composition')" style="margin-left: 20px">composition</my-button>



    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.navbar {
    height: 50px;
    background-color: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__header {
    font-size: 40px;
    font-weight: bold;
    color: #1B3852;
    cursor: pointer;

}
.navbar__btns{
    margin-left: auto
}
</style>