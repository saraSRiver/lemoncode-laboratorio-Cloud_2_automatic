import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'

//createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')

