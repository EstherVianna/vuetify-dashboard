import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import router from './plugins/router/router';

const app = createApp(App);

registerPlugins(app);
app.use(router)

app.mount('#app')
