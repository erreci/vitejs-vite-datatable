<script setup lang="ts">
import type { Header, Item } from 'vue3-easy-data-table';

const headers: Header[] = [
  { text: 'Name', value: 'name', sortable: true },
  { text: 'Height (cm)', value: 'height', sortable: true },
  { text: 'Weight (kg)', value: 'weight', sortable: true },
  { text: 'Age', value: 'age', sortable: true },
];

const items: Item[] = [
  { name: 'Curry', height: 178, weight: 77, age: 20 },
  { name: 'James', height: 180, weight: 75, age: 21 },
  { name: 'Jordan', height: 181, weight: 73, age: 22 },
];
const sortBy = 'name';
const sortType = 'desc';
const showRow = (item: ClickRowArgument) => {
  document.getElementById('row-clicked').innerHTML = JSON.stringify(item);
};
const themeColor = '#f48225';
</script>

<template>
  <EasyDataTable
    buttons-pagination
    :headers="headers"
    :items="items"
    :sort-by="sortBy"
    :sort-type="sortType"
    :theme-color="themeColor"
    alternating
    @click-row="showRow"
     border-cell
  />
  row clicked:<br />
  <div id="row-clicked"></div>
</template>

<style></style>
