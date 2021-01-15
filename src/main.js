import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import api from './api';

const app = createApp(App);
app.use(Antd);
app.use(api);
app.use(store).use(router).mount('#app');
app.config.productionTip = false;

app.prototype.$api = api;
