<template>
  <div>
    <v-hover v-if="tooltip">
      <v-tooltip
        slot-scope="{ hover }"
        bottom
      >
        <v-btn
          slot="activator"
          :theme="theme"
          :align="align"
          :justify="justify"
          :disabled="disabled"
          :depressed="type === 'depressed'"
          :block="type === 'block'"
          :flat="type === 'flat'"
          :fab="type === 'fab'"
          :icon="type === 'icon'"
          :outline="type === 'outline'"
          :raised="type === 'raised'"
          :round="type === 'round'"
          :color="hover ? colorHover : color"
          :class="{ 'text-capitalize': label, 'text-lowercase': icon }"
          :size="size"
          @click="onClick()"
        >
          <span v-if="label">{{ label }}</span>
          <v-icon v-else>{{ icon }}</v-icon>
        </v-btn>
        <span>{{ tooltip }}</span>
      </v-tooltip>
    </v-hover>
    <v-hover v-else>
      <v-btn
        slot-scope="{ hover }"
        :theme="theme"
        :align="align"
        :justify="justify"
        :disabled="disabled"
        :depressed="type === 'depressed'"
        :block="type === 'block'"
        :flat="type === 'flat'"
        :fab="type === 'fab'"
        :icon="type === 'icon'"
        :outline="type === 'outline'"
        :raised="type === 'raised'"
        :round="type === 'round'"
        :color="hover ? colorHover : color"
        :class="{ 'text-capitalize': label, 'text-lowercase': icon }"
        :size="size"
        @click="onClick()"
      >
        <span v-if="label">{{ label }}</span>
        <v-icon v-else>{{ icon }}</v-icon>
      </v-btn>
    </v-hover>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'v-btn-plus',
  props: {
    align: VueTypes.oneOf(['bottom', 'top']),
    justify: VueTypes.oneOf(['left', 'right']),
    color: VueTypes.string.def('primary'),
    colorHover: VueTypes.string.def('secondary'),
    disabled: VueTypes.bool.def(false),
    icon: VueTypes.string,
    label: VueTypes.string,
    position: VueTypes.oneOf(['left', 'right']),
    tooltip: VueTypes.string,
    size: VueTypes.oneOf(['small', 'medium', 'large']).def('small'),
    theme: VueTypes.oneOf(['light', 'dark']),
    type: VueTypes.oneOf(['block', 'depressed', 'fab', 'flat', 'icon', 'outline', 'raised', 'round']).def('raised')
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
  created: function() {
    // Workaround as prop validation on multiple props is not possible
    if (!this.icon && !this.label) {
      console.error('[Vue warn]: Missing required prop, specify at least one of the following: "label" or "icon"')
    }
  }
}
</script>

<style scoped>
</style>
