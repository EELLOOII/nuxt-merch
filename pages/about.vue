<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste quisquam voluptatibus totam minus nam harum enim vel asperiores dolores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste quisquam voluptatibus totam minus nam harum enim vel asperiores dolores.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja') 
    const { data } = await useFetch('/api/currency/GBP') 
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>