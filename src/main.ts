import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import 'vfonts/FiraCode.css';
import masonry from 'vue-next-masonry';

const app = createApp(App);

app.use(masonry)

app.use(store);

app.use(router);

app.mount('#app');
