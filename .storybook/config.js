import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { configure, addDecorator, addParameters  } from '@storybook/vue';

import '@mdi/font/css/materialdesignicons.css'
import '@/plugins/vuetify';


// Vuetify has a 12 point grid system. Built using flex-box, the grid is used to layout an application's content. It
// contains 5 types of media breakpoints that are used for targeting specific screen sizes and orientations.
const vuetifyViewports = {
  VuetifyXs: {
    name: 'Vuetify XS',
    styles: {
      width: '500px',
      height: '100vh',
    },
    type: 'mobile'
  },
  VuetifySm: {
    name: 'Vuetify SM',
    styles: {
      width: '600px',
      height: '100vh',
    },
    type: 'mobile'
  },
  VuetifyMd: {
    name: 'Vuetify MD',
    styles: {
      width: '960px',
      height: '100vh',
    },
    type: 'tablet'
  },
  VuetifyLg: {
    name: 'Vuetify LG',
    styles: {
      width: '1264px',
      height: '100vh',
    },
    type: 'desktop'
  },
  VuetifyXl: {
    name: 'Vuetify XL',
    styles: {
      width: '1904px',
      height: '100vh',
    },
    type: 'desktop'
  }
}

addParameters({
  viewport: {
    defaultViewport: 'VuetifyMd',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...vuetifyViewports,
    },
  },
});

// Ensures every story is wrapped in a v-app tag. To enable the Storybook background addon to control the background
// color we need to add a hack to VApp, as it sets and controls the background color. We set the background-color on
// VApp to transparent.
addDecorator(() => ({
  template: '<v-app style="background-color: transparent;"><story/></v-app>',
  style: '.theme--light.application { background-color: transparent; }'
}))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
