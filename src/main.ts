import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
/* import the fontawesome core */
// @ts-ignore
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// @ts-ignore
import router from './router/index.js';
import ContextMenu from '@imengyu/vue3-context-menu'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import 'primevue/resources/themes/viva-dark/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'animate.css';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ContextMenu);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
