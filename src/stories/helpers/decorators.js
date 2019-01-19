/**
 * Wraps a story in a grid list container with wrapped row layout and single flex item. Making it possible to size a component as required.
 * The flex item should be specified in the following format: <media breakpoint><size>
 * - media breakpoint: xs: extra small, sm: small, md: medium, lg: large, xl: extra large
 * - size: number between 1-12
 * @param {Object} story - The story object to wrap
 * @param {String} gutter - Size of the grid list gutter: xs, sm, md, lg, xl
 * @param {String} size - Size of the flex item in the format: <media breakpoint><size>, see above
 * @returns {Object} The wrapped story object
 */
export function wrapComponent(story, gutter, size) {
  const WrappedComponent = story()
  return {
    components: { WrappedComponent },
    template: `<v-container grid-list-${gutter} fluid :style="{ border: borderStyle }"><v-layout row wrap align-center justify-center><v-flex ${size}><wrapped-component/></v-flex></v-layout></v-container>`,
    data() {
      return { borderStyle: 'medium solid grey' }
    }
  }
}
