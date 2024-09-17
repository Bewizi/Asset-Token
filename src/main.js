import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification'
import Vue3Marquee from 'vue3-marquee'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.use(Vue3Marquee)
app.mount('#app')
