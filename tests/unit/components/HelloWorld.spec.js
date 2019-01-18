import { createLocalVue, shallowMount } from '@vue/test-utils'
import { SilenceWarnHack } from '@tst/helpers/SilenceWarnHack'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'

const silenceWarnHack = new SilenceWarnHack()

describe('HelloWorld.vue', () => {
  let localVue = null

  beforeEach(() => {
    silenceWarnHack.enable()
    localVue = createLocalVue()
    localVue.use(Vuetify)
    silenceWarnHack.disable()
  })

  it('renders default msg when msg is not specified', () => {
    const defaultMsg = 'Welcome to Vuetify!'
    const wrapper = shallowMount(HelloWorld, {
      localVue: localVue
    })
    expect(wrapper.text()).toMatch(defaultMsg)
  })

  it('renders msg when specified', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      localVue: localVue,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
