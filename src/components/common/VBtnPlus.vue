<template>
  <div>
    <v-hover v-if="tooltip">
      <v-tooltip
        slot-scope="{ hover }"
        bottom
      >
        <v-btn
          slot="activator"
          flat
          :icon="hasIcon(item)"
          :color="hover ? toolbarTextColorHover() : toolbarTextColor()"
          :class="{ 'text-capitalize': item.label, 'text-lowercase': item.icon }"
        >
          <span v-if="item.label">{{ item.label }}</span>
          <v-icon v-else>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.tooltip }}</span>
      </v-tooltip>
    </v-hover>
    <v-hover v-else>
      <v-btn
        slot-scope="{ hover }"
        flat
        :icon="hasIcon(item)"
        :color="hover ? toolbarTextColorHover() : toolbarTextColor()"
        :class="{ 'text-capitalize': item.label, 'text-lowercase': item.icon }"
      >
        <span v-if="item.label">{{ item.label }}</span>
        <v-icon v-else>{{ item.icon }}</v-icon>
      </v-btn>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'v-btn-plus',
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: 'label'
    },
    tooltip: {
      type: String,
      required: false,
      default: null
    }
  },
  data: () => ({}),
  methods: {
    onClick() {
      this.$emit('click')
    },
    hasIcon() {
      return this.icon && this.icon.length > 0
    }
  }
}
</script>

<style scoped>
</style>
