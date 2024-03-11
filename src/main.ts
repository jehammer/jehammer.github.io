import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
/* import the fontawesome core */
// @ts-ignore
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// @ts-ignore
import router from './router/index.js';
import ContextMenu from '@imengyu/vue3-context-menu';
// @ts-ignore
import Notifications from '@kyvg/vue3-notification';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* add icons to the library */
library.add(faGithub);

const vuetify = createVuetify({
  components,
  directives,
})

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import 'primevue/resources/themes/viva-dark/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'animate.css';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.directive('animateonscroll', AnimateOnScroll);
app.use(vuetify);
app.use(ContextMenu);
app.use(PrimeVue);
app.use(Notifications);
app.use(router);
app.mount('#app');
