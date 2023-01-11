import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
//import VueGravatar from "vue3-gravatar";
import Bootstrap from 'bootstrap/dist/js/bootstrap.js'

import './config/msgs'
import './config/axios'
import store from './config/store'
//import router from './config/router'
import App from './App.vue'
import { createApp,h } from 'vue'


const app = createApp({
    render:()=>h(App)
})
app.use(store)
//app.use(VueGravatar)
app.use(Bootstrap)
app.mount('#app')