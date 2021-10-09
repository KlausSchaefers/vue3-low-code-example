import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuelowcode from 'vue-low-code-beta'

createApp(App).use(router).use(vuelowcode).mount('#app')
