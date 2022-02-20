import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import w3css from '@/assets/w3.css'

createApp(App).use(store).use(router).use(w3css).mount('#app')
