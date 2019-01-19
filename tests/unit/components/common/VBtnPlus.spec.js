import { createLocalVue, mount } from '@vue/test-utils'
import { SilenceWarnHack } from '@tst/helpers/SilenceWarnHack'
import { spyConsole } from '@tst/helpers/test-utils'
import Vuetify from 'vuetify'
import VBtnPlus from '@/components/common/VBtnPlus.vue'

const silenceWarnHack = new SilenceWarnHack()

describe('VStatsCard.vue', () => {
  let localVue = null

  beforeEach(() => {
    silenceWarnHack.enable()
    localVue = createLocalVue()
    localVue.use(Vuetify)
    silenceWarnHack.disable()
  })

  it('renders with default settings when only label is specified', () => {
    const label = 'Very cool'
    const defaultColor = 'primary'
    const defaultType = 'raised'
    const defaultSize = 'small'
    const wrapper = mount(VBtnPlus, {
      localVue: localVue,
      propsData: { label }
    })
    expect(wrapper.text()).toMatch(label)
    expect(wrapper.html()).toContain(`${defaultType}="true"`)
    expect(wrapper.html()).toContain(`size="${defaultSize}"`)
    expect(wrapper.html()).toContain(`class="v-btn theme--light ${defaultColor} text-capitalize"`)
    expect(wrapper.html()).not.toContain(`v-icon"`)
  })

  it('renders with default settings when only icon is specified', () => {
    const icon = 'mdi-info'
    const defaultColor = 'primary'
    const defaultType = 'raised'
    const defaultSize = 'small'
    const wrapper = mount(VBtnPlus, {
      localVue: localVue,
      propsData: { icon }
    })
    expect(wrapper.html()).toContain(`class="v-icon mdi ${icon} theme--light"`)
    expect(wrapper.html()).toContain(`${defaultType}="true"`)
    expect(wrapper.html()).toContain(`size="${defaultSize}"`)
    expect(wrapper.html()).toContain(`class="v-btn theme--light ${defaultColor} text-lowercase"`)
  })

  describe('test prop warnings', () => {
    let spy = spyConsole()

    it('displays warning messages when both label and icon are not specified', () => {
      mount(VBtnPlus, {
        localVue: localVue
      })
      expect(console.error).toHaveBeenCalledTimes(1)
      expect(spy.console.mock.calls[0][0]).toContain(
        '[Vue warn]: Missing required prop, specify at least one of the following: "label" or "icon"'
      )
    })
  })
})
