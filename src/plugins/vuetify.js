import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  options: {
    customProperties: true // generate a css variable for each theme color
  }
})
