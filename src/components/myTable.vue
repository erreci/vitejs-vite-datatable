<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';

DataTable.use(DataTablesLib);

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];
const dataj = [
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    salary: '$3,120',
    start_date: '2011/04/25',
    office: 'Edinburgh',
    extn: 5421,
  },
  {
    name: 'Garrett Winters',
    position: 'Director',
    salary: '5300',
    start_date: '2011/07/25',
    office: 'Edinburgh',
    extn: '8422',
  },
  // ...
];
</script>

<template>
  <div class="container">
    <DataTable
      :data="dataj"
      :columns="columns"
      class="table table-hover table-striped"
      width="100%"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <!-- <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </tfoot> -->
    </DataTable>
  </div>
</template>

<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
