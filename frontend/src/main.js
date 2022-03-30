import { createApp } from 'vue'
import App from './App.vue'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import store from './store/index'
import constants from './util/constants'
import helpers from './util/helpers'

const app = createApp(App);

app.use(store);
app.use(BootstrapVue3);

app.provide('$constants', constants);
app.provide('$helpers', helpers);

app.mount('#app')
