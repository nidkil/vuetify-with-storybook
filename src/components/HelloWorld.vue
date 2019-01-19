<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex xs12 my-3>
        <v-layout
          justify-center
          row
          wrap
        >
          <v-flex xs4 sm3 md2 pa-2>
            <v-btn-plus @click="onClick" label="Cool" color="red" type="outline" colorHover="green" />
          </v-flex>
          <v-flex xs4 sm3 md2 pa-2>
            <v-btn-plus icon="mdi-account" tooltip="Wow!" type="icon" />
          </v-flex>
          <v-flex xs4 sm3 md2 pa-2>
            <v-btn-plus icon="mdi-account" tooltip="Wow!" type="fab" color="blue" />
          </v-flex>
          <v-flex xs4 sm3 md2 pa-2>
            <v-btn-plus icon="mdi-account" tooltip="Wow!" type="depressed" color="orange" />
          </v-flex>
          <v-flex xs4 sm3 md2 pa-2>
            <v-btn-plus icon="mdi-account" tooltip="Wow!" type="flat" color="red" />
          </v-flex>
          <v-flex xs4 sm3 md2 pa-2>
            <v-btn-plus icon="mdi-account" tooltip="Wow!" type="round" color="purple" />
          </v-flex>
          <v-flex xs4 sm3 md4 pa-2>
            <v-btn-plus label="Account" tooltip="Wow!" type="block" color="purple" />
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 my-3>
        <v-layout
            justify-center
            row
            wrap
        >
          <v-flex xs8 sm7 md4 lg3 pa-2>
            <v-stats-card title="1.200" sub-title="assigned credits" color="primary" icon="mdi-plus" />
          </v-flex>
          <v-flex xs8 sm7 md4 lg3 pa-2>
            <v-stats-card title="1.000" sub-title="used credits" color="secondary" icon="mdi-minus" />
          </v-flex>
          <v-flex xs8 sm7 md4 lg3 pa-2>
            <v-stats-card title="200" sub-title="remaining credits" color="accent" icon="mdi-sigma" />
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          {{ msg }}
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VBtnPlus from '@/components/common/VBtnPlus'
import VStatsCard from '@/components/common/VStatsCard'

export default {
  props: {
    msg: {
      type: String,
      required: false,
      default: 'Welcome to Vuetify!'
    }
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuetifyjs.com'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  }),
  methods: {
    onClick: function() {
      console.log('Clicked!')
    }
  },
  components: {
    VBtnPlus,
    VStatsCard
  }
}
</script>

<style>
</style>
