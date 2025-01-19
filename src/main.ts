import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { createApp } from 'vue'
import { Amplify } from 'aws-amplify'

import amplfyOutputs from "../amplify_outputs.json"

Amplify.configure(amplfyOutputs);


const app = createApp(App)

registerPlugins(app)

app.mount('#app')
