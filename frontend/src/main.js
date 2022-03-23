import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import store from './store/index'
import constants from './util/constants'
import helpers from './util/helpers'

const app = createApp(App);

app.use(PrimeVue);
app.use(store);

app.provide('$constants', constants);
app.provide('$helpers', helpers);

app.mount('#app')
