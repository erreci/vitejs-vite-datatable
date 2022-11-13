<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductService from '../service/ProductService.js';

onMounted(() => {
  productService.value
    .getProductsSmall()
    .then((data) => {products.value = data;
                     console.log(products.value )
    });
});

const products = ref();
const productService = ref(new ProductService());

</script>
<template>
  <div>
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>
