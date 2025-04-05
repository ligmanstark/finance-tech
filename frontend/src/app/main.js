import 'primeicons/primeicons.css'
import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from '@/app/router/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'PrimeVue',
        order: 'theme, base, PrimeVue',
      },
    },
  },
})

app.mount('#app')
