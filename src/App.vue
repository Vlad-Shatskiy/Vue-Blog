<template>
<navbar></navbar>
    <div class="app">
    
    <router-view>
    
    </router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
    export default {
  components: { Navbar },
        
    }
</script>

<style>
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Mono', monospace;
    color: gray
}
.app {
    padding: 20px;
    background-color: #1B3852;

}
</style>