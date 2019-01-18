/**
 * This is a hack to suppress the Vuetify Multiple instances of Vue detected warning.
 * See this post https://wordpress.com/post/nidkil.me/1950 for more information.
 */
export class SilenceWarnHack {
  constructor() {
    this.originalLogError = console.error
  }
  enable() {
    console.error = (...args) => {
      if (args[0].includes('[Vuetify]') && args[0].includes('https://github.com/vuetifyjs/vuetify/issues/4068')) return
      this.originalLogError(...args)
    }
  }
  disable() {
    console.error = this.originalLogError
  }
}
