import 'github-markdown-css'
import 'prismjs/themes/prism.css'
import { createApp } from 'vue-demi'
import App from './App.vue'
import NanoUIPlugin from '../plugin.js'

const app = createApp(App)
app.use(NanoUIPlugin)

app.mount('#app')
