// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

export const api = createAPI({
  config: {
    apiKey: "AIzaSyCrz78jQd0gtCL9yhuO9xhb4I3hi7N-Sgs",
    authDomain: "goofies-vue-template.firebaseapp.com",
    databaseURL: "https://goofies-vue-template.firebaseio.com",
    projectId: "goofies-vue-template",
    storageBucket: "goofies-vue-template.appspot.com",
    messagingSenderId: "1056039060834"
  }
})
