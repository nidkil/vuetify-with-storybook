/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { wrapComponent } from './helpers/decorators'

import VStatsCard from '@/components/common/VStatsCard.vue'

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
