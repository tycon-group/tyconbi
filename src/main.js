import { createApp } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(Layout);
app.use(Menu);
app.use(store).use(router).mount('#app');
app.config.productionTip = false;
