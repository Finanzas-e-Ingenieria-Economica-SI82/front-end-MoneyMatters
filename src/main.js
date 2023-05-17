import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row'; 
import Divider from 'primevue/divider';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
//core
import "primevue/resources/primevue.min.css";

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(ToastService);

app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-datatable', DataTable);
app.component('pv-dataView', DataView);
app.component('pv-dataViewLayoutOptions', DataViewLayoutOptions);
app.component('pv-column', Column);
app.component('pv-group', ColumnGroup);
app.component('pv-row', Row);
app.component('pv-divider', Divider);
app.component('pv-multiSelect', MultiSelect);
app.component('pv-toast', Toast);

app.mount('#app')
