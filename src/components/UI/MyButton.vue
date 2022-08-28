<template>
    <button className="btn">
    <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
  background-color: white;
  
}
</style>