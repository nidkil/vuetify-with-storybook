import { createLocalVue, shallowMount } from '@vue/test-utils'
import { SilenceWarnHack } from '@tst/helpers/SilenceWarnHack'
import Vuetify from 'vuetify'
import VStatsCard from '@/components/common/VStatsCard.vue'

const silenceWarnHack = new SilenceWarnHack()

describe('VStatsCard.vue', () => {
  let localVue = null

  beforeEach(() => {
    silenceWarnHack.enable()
    localVue = createLocalVue()
    localVue.use(Vuetify)
    silenceWarnHack.disable()
  })

  it('renders title and subTitle when specified with default color and icon', () => {
    const title = 'My title'
    const subTitle = 'My subTitle'
    const defaultColor = 'grey'
    const defaultIcon = 'mdi-information-outline'
    const wrapper = shallowMount(VStatsCard, {
      localVue: localVue,
      propsData: { title, subTitle }
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(subTitle)
    expect(wrapper.html()).toContain(`<v-icon-stub size="56px" color="${defaultColor}">${defaultIcon}</v-icon-stub>`)
    expect(wrapper.html()).toContain(`class="text-xs-center py-3 white--text ${defaultColor}"`)
  })

  it('renders title and subTitle with with custom color and icon when specified', () => {
    const title = 'My title'
    const subTitle = 'My subTitle'
    const color = 'red'
    const icon = 'mdi-information'
    const wrapper = shallowMount(VStatsCard, {
      localVue: localVue,
      propsData: { color, icon, title, subTitle }
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(subTitle)
    expect(wrapper.html()).toContain(`<v-icon-stub size="56px" color="${color}">${icon}</v-icon-stub>`)
    expect(wrapper.html()).toContain(`class="text-xs-center py-3 white--text ${color}"`)
  })

  it('throws an exception if title is not specified', () => {
    const title = 'My title'
    const subTitle = 'My subTitle'
    const color = 'red'
    const icon = 'mdi-information'
    const wrapper = shallowMount(VStatsCard, {
      localVue: localVue,
      propsData: { color, icon, title, subTitle }
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(subTitle)
    expect(wrapper.html()).toContain(`<v-icon-stub size="56px" color="${color}">${icon}</v-icon-stub>`)
    expect(wrapper.html()).toContain(`class="text-xs-center py-3 white--text ${color}"`)
  })
})
