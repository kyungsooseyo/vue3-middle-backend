import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '../src/assets/style/index.scss';
const app = createApp(App)
installElementPlus(app)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
