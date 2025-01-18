import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { createApp } from 'vue'
import { Amplify } from 'aws-amplify'

const awsConfig = {
    region: import.meta.env["VITE_AWS_REGION"] as string,
    userPoolId: import.meta.env["VITE_USER_POOL_ID"] as string,
    userPoolWebClientId: import.meta.env["VITE_USER_POOL_WEB_CLIENT_ID"] as string,
}

Amplify.configure({
  auth: {
    aws_region: awsConfig.region,
    user_pool_id: awsConfig.userPoolId,
    user_pool_client_id: awsConfig.userPoolWebClientId,
    authentication_flow_type: "USER_SRP_AUTH"
  }
});


const app = createApp(App)

registerPlugins(app)

app.mount('#app')
