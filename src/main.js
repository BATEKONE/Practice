import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Marquee from 'vue3-marquee'

createApp(App).use(store).use(router).use(Vue3Marquee).mount('#app')

app.use(Vue3Marquee, { name: 'MarqueeAnimation' })
