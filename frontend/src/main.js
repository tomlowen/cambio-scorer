import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import store from './store/index'
import constants from './util/constants'
import helpers from './util/helpers'

import StartPage from './components/pages/StartPage.vue';
import ScorePage from './components/pages/ScorePage.vue';

const Start = StartPage
const Scores = ScorePage

const routes = [
  { path: '/', component: Start },
  { path: '/scores', component: Scores },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);

app.use(store);
app.use(BootstrapVue3);
app.use(router)

app.provide('$constants', constants);
app.provide('$helpers', helpers);

app.mount('#app')
