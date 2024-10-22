<template>
  <div>
    <!-- In here, we created a custom metadata as well using these tags -->
    <Head>
      <Title>Nuxt Merch | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
   <!-- <p>{{ product.title }}</p>   
   <p>{{ product.price }}</p>   
   <p>{{ product.id }}</p>    -->

   <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
console.log(uri)

// fetch the product
const { data: product} = await useFetch(uri, { key: id })

// fatal is use to render the error that is created in the browser. The application is only requesting from the browser and not in the server
if (!product.value) {
  throw createError ({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
