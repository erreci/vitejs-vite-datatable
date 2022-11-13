// import { createApp } from 'vue';
// //import './style.css';
// import App from './App.vue';
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
createApp(App).mount('#app');

App.use(PrimeVue);
App.component('Dialog', Dialog);

//import Vue3EasyDataTable from 'vue3-easy-data-table';
//import 'vue3-easy-data-table/dist/style.css';

//createApp(App).component('EasyDataTable', Vue3EasyDataTable).mount('#app');
//App.component('EasyDataTable', Vue3EasyDataTable);

// Vuetify
// import 'vuetify/styles';
// import { createVuetify } from 'vuetify';
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';

// const vuetify = createVuetify({
//   components,
//   directives,
// });

//createApp(App).use(vuetify).mount('#app');
