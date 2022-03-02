import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes/routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const app = createApp(App)
app.use(router)
app.mount('#app')
