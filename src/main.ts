import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./index.css"
// test commit
createApp(App).use(router).mount('#app')
