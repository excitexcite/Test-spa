import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import BaseSpinner from './components/UI/BaseSpinner.vue'

const app = createApp(App)

app.component('BaseSpinner', BaseSpinner)

app.use(createPinia())
app.use(router)

app.mount('#app')
