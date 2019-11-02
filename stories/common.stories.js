/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { wrapComponent } from './helpers/decorators'

import VBtnPlus from '@/components/common/VBtnPlus.vue'
import VStatsCard from '@/components/common/VStatsCard.vue'

export const methods = {
  onClicked: action('onClicked')
}

storiesOf('VBtnPlus', module)
  .addDecorator(story => wrapComponent(story, 'xl', 'xs2'))
  .addDecorator(
    withBackgrounds([{ name: 'twitter', value: '#00aced', default: true }, { name: 'facebook', value: '#3b5998' }])
  )
  .add('text with defaults', () => ({
    components: { VBtnPlus },
    template: `<div class="text-xs-center">
         <v-btn-plus @click="onClicked('without tooltip')" label="Without tooltip" />
         <v-btn-plus @click="onClicked('with tooltip')" label="With tooltip" tooltip="Click me" />
       </div>`,
    methods
  }))
  .add('icon with defaults', () => ({
    components: { VBtnPlus },
    template: `<div class="text-xs-center">
         <v-btn-plus @click="onClicked('without tooltip')" icon="mdi-account" />
         <v-btn-plus @click="onClicked('with tooltip')" icon="mdi-account" tooltip="Click me" />
       </div>`,
    methods
  }))
  .add('with tooltip and custom colors and types', () => ({
    components: { VBtnPlus },
    template: `<div class="text-xs-center">
         <v-btn-plus @click="onClicked('block')" icon="mdi-account" tooltip="Click me: type = block" color="primary" colorHover="grey" type="block" />
         <v-btn-plus @click="onClicked('depressed')" icon="mdi-account" tooltip="Click me: type = depressed" color="secondary" colorHover="grey" type="depressed" />
         <v-btn-plus @click="onClicked('fab')" icon="mdi-account" tooltip="Click me: type = fab" color="accent" colorHover="grey" type="fab" />
         <v-btn-plus @click="onClicked('flat')" icon="mdi-account" tooltip="Click me: type = flat" color="error" colorHover="grey" type="flat" />
         <v-btn-plus @click="onClicked('icon')" icon="mdi-account" tooltip="Click me: type = icon" color="info" colorHover="grey" type="icon" />
         <v-btn-plus @click="onClicked('outline')" icon="mdi-account" tooltip="Click me: type = outline" color="success" colorHover="grey" type="outline" />
         <v-btn-plus @click="onClicked('round')" icon="mdi-account" tooltip="Click me: type = round" color="warning" colorHover="grey" type="round" />
         <v-btn-plus @click="onClicked('raised')" icon="mdi-account" tooltip="Click me: type = raised" color="orange" colorHover="grey" type="raised" />
       </div>`,
    methods
  }))
  .add('themes', () => ({
    components: { VBtnPlus },
    template: `<div class="text-xs-center">
         <v-btn-plus @click="onClicked('light')" label="light" tooltip="Click me: type = light" color="primary" colorHover="grey" type="block" theme="light" />
         <v-btn-plus @click="onClicked('dark')" label="dark" tooltip="Click me: type = dark" color="secondary" colorHover="grey" type="block" theme="dark" />
       </div>`,
    methods
  }))

storiesOf('VStatsCard', module)
  .addDecorator(story => wrapComponent(story, 'xl', 'xs4'))
  .add('default', () => ({
    components: { VStatsCard },
    template: '<v-stats-card title="1.200" sub-title="assigned credits"/>'
  }))
  .add('custom color and icon', () => ({
    components: { VStatsCard },
    template: '<v-stats-card title="1.000" sub-title="used credits" color="red" icon="mdi-minus" />'
  }))
