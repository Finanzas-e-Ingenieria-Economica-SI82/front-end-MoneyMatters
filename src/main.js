import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
//core
import "primevue/resources/primevue.min.css";

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('pv-button', Button)


app.mount('#app')
