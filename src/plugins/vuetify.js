import Vue from 'vue'
import Vuetify, { VApp, VBtn, VCard, VCardText, VContainer, VFlex, VHover, VIcon, VLayout, VTooltip } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  components: {
    VApp,
    VBtn,
    VCard,
    VCardText,
    VContainer,
    VFlex,
    VHover,
    VIcon,
    VLayout,
    VTooltip
  }
})
