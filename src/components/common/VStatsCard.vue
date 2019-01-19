<template>
  <v-card>
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <v-layout row ma-0>
          <v-flex xs6 align-center justify-center py-3>
            <v-layout column ma-0 justify-center align-center>
              <v-icon size="56px" :color="color">{{ icon }}</v-icon>
            </v-layout>
          </v-flex>
          <v-flex xs6 class="text-xs-center py-3 white--text" :class="color">
            <div class="headline">{{ title }}</div>
            <span class="caption">{{ subTitle }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'v-stats-card',
  props: {
    icon: VueTypes.string.def('mdi-information-outline'),
    title: VueTypes.string.isRequired,
    subTitle: VueTypes.string.isRequired,
    color: VueTypes.string.def('grey')
  }
}
</script>
