import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './services/axios';

const app = createApp(App);

app.config.globalProperties.$http = axios;

const accessToken = localStorage.getItem('access_token');
if (accessToken) {
  store.commit('auth/SET_ACCESS_TOKEN', accessToken);
}

app.use(router);
app.use(store);
app.mount('#app');
