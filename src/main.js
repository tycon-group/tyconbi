import { createApp } from 'vue';
import {
  Layout, Menu, Slider, Avatar,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(Layout);
app.use(Menu);
app.use(Slider);
app.use(Avatar);
app.use(store).use(router).mount('#app');
app.config.productionTip = false;
