<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");

//way of overriding the metadata set on nuxt.config.ts file
useHead({
  title: 'Nuxt | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch'}
  ]
})
</script>

<style scoped></style>
