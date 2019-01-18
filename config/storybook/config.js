/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import '@/plugins/vuetify'

import '@mdi/font/css/materialdesignicons.css'

// Ensures every story is wrapped in a v-app tag
addDecorator(() => ({
  template: '<v-app><story/></v-app>'
}))

const req = require.context('@/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
