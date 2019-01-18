<p align="center">
  <img src="./public/vuetify-with-storybook-logo.png" alt="Setting up Storybook with Vuetify logo" width="200"/>
</p>
<p align="center" style="font-size: 2.0em"><b>Setting up Storybook with Vuetify</b></p>
<p align="center" style="font-size: 1.0em">Learn how to set and use it the proper way</p>

[![Vue 2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Vue CLI 3](https://img.shields.io/badge/vue%20cli-3-brightgreen.svg)](https://cli.vuejs.org/)
[![Vuetify](https://img.shields.io/badge/vuetify-1.3.x-blue.svg)](https://http://vuetifyjs.com//)
[![Storybook](https://img.shields.io/badge/storybook-4.1.x-ff69b4.svg)](https://storybook.js.org/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![HitCount](http://hits.dwyl.com/nidkil/vuetify-with-storybook.svg)](http://hits.dwyl.com/dwyl/start-here)

## Introduction

I struggled to get Storybook to work with Vuetify. In this repository I have documented how I got it up and running the proper way. Hopefully it will give others a kick start.

<a name="toc">
  <strong>Table of Contents</strong>

<!-- toc -->

- [Inspiration](#inspiration)
- [Built with](#built-with)
- [Important](#important)
- [Useful links](#useful-links)
- [Create project manually](#create-project-manually)
- [Project setup](#project-setup)
- [Misc](#misc)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support & brag about us](#support--brag-about-us)
- [Author](#author)

<!-- tocstop -->

</a>

## Inspiration

The solution was inspired by [vue-vuetify-storybook](https://github.com/jsilva-pt/vue-vuetify-storybook), which shows a working example of Vue CLI 3, Vuetify and Storybook and a lot of other goodies. I tried to setup Storybook with my own repository taking this repo as an example, but I failed. The problem with this repository is, that it does not explain how it works. It also uses different configurations for the application itself and Storybook. This means that a component can work for the one but not for the other. I wanted a shared configuration, so that when a component works in either you no it works for the other. That shared configuration is the `./src/plugins/vuetify.js` plugin file that initializes Vuetify.

So you have the choice to follow along and configure your project yourself and really understand how it works or just clone and use the repository. The choice is yours. Are you going to choose the red pill or the blue pill?

[Go to Table of Contents](#toc)

## Built with

- [Vue CLI 3 v3.0.4](https://cli.vuejs.org/)
- [Vue 2 v2.5.21](https://vuejs.org/)
- [Vuetify v1.3.0](https://vuetifyjs.com/en/) using the a la carte setup
- [Storybook v4.1.0](https://storybook.js.org/)
- [Material Design Icons (MDI)](https://materialdesignicons.com/)

[Go to Table of Contents](#toc)

## Important

The following two points are key to getting Storybook to work correctly with Vuetify:

1) The Vuetify components must be imported individually from 'vuetify/lib' and added as components to `Vue.use` when initializing Vuetify, see the [Vuetify documentation](https://vuetifyjs.com/en/framework/a-la-carte#importing-components) for more information. This is done in the `./src/plugins/vuetify.js` plugin file. If a story isn't displaying correctly in Storybook and it does work correctly when running normally, always check that all Vuetify components it uses are imported!

  > **IMPORTANT** Storybook does not work with `vuetify-loader`, at least I did not get it to work.

2) The font must be imported using the `preview-head.html` file.

[Go to Table of Contents](#toc)

## Useful links

- [Storybook website](https://storybook.js.org/)
- [Storybook addons](https://github.com/storybooks/storybook/tree/next/addons)
- [Storybook Vue example](https://github.com/storybooks/storybook/tree/next/examples/vue-kitchen-sink)
- [vue-cli-plugin-storybook](https://github.com/storybooks/vue-cli-plugin-storybook)
- [storybook-addon-vue-info](https://github.com/pocka/storybook-addon-vue-info)

[Go to Table of Contents](#toc)

## Create project manually

The following section describes the steps that need to be execute to create a project with Vue, Vuetify and Storybook manually.

- Create a Vue project:

    ```
    $ mkdir sb-test & cd sb-test
    $ vue create .
    ```

    With the following options:

    ```
    Vue CLI v3.0.4
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Stylus
    ? Pick a linter / formatter config: Prettier
    ? Pick additional lint features: Lint on save
    ? Pick a unit testing solution: Jest
    ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
    ? Save this as a preset for future projects? (y/N) n
    ```

- Add Vuetify:

    ```
    $ vue add vuetify
    ```

    With the following options:

    ```
    ? Choose a preset: Configure (advanced)
    ? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
    ? Use custom theme? Yes
    ? Use custom properties (CSS variables)? Yes
    ? Select icon font Material Design Icons
    ? Use fonts as a dependency (for Electron or offline)? No
    ? Use a-la-carte components? Yes
    ? Select locale English
    ```

- Install the loaders required by a la carte:

    ```
    $ npm install --save-dev stylus stylus-loader style-loader css-loader
    ```

- Add the Material Design Icons (MDI):

    ```
    $ npm install --save-dev @mdi/font
    ```

    Add the following to the `./src/main.js` file:

    ```
    // Ensure you have installed the `css-loader`
    import '@mdi/font/css/materialdesignicons.css'
    ```

    Remove the following from the `./public/index.html` file:

    ```
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    ```

- Add the following Vuetify component to `./src/components/common/StatsCard.vue`:

    ```
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
    export default {
      name: 'stats-card',
      props: {
        icon: {
          type: String,
          required: false,
          default: 'mdi-information-outline'
        },
        title: {
          type: String,
          required: true
        },
        subTitle: {
          type: String,
          required: true
        },
        color: {
          type: String,
          required: false,
          default: 'grey'
        }
      }
    }
    </script>
    ```

- Add the following to `./src/components/HelloWorld.vue`:

    To the `template`:

    ```
    <v-flex xs12 my-3>
      <v-layout
        justify-center
        row
      >
        <v-flex xs4 pa-2>
          <stats-card title="1.200" sub-title="assigned credits" color="primary" icon="mdi-plus" />
        </v-flex>
        <v-flex xs4 pa-2>
          <stats-card title="1.000" sub-title="used credits" color="secondary" icon="mdi-minus" />
        </v-flex>
        <v-flex xs4 pa-2>
          <stats-card title="200" sub-title="remaining credits" color="accent" icon="mdi-sigma" />
        </v-flex>
      </v-layout>
    </v-flex>
    ```

    To the `script`:

    ```
    import StatsCard from '@/components/common/StatsCard'
    export default {
      components: {
        StatsCard
      }
    }
    ```

- Add `--open` to the following entry in the `package.json` file, so the browser is automatically opened on start:

    ```
    {
      "scripts": {
        "serve": "vue-cli-service serve --open"
      }
    }
    ```

- Run lint to correct formatting:

    ```
    $ npm run lint
    ```

- Test:

    ```
    $ npm run serve
    ```

- Add Storybook:

    ```
    $ vue add storybook
    ```

    The Storybook plugin injects two additional commands, `storybook:build` and `storybook:serve` into vue-cli-service. You can see all injected Vue CLI 3 commands by running:

    ```
    $ npx vue-cli-service help
    ```

    You can also learn about the available options of each command with:

    ```
    $ npx vue-cli-service help [command]
    ```

- Replace the contents of `./config/storybook/config.js` file with the following:

    ```
    /* eslint-disable import/no-extraneous-dependencies */
    import { configure, addDecorator } from "@storybook/vue";
    import "@/plugins/vuetify";

    import "@mdi/font/css/materialdesignicons.css";

    // Ensures every story is wrapped in a v-app tag
    addDecorator(() => ({
      template: "<v-app><story/></v-app>"
    }));

    const req = require.context("@/stories", true, /.stories.js$/);

    function loadStories() {
      req.keys().forEach(filename => req(filename));
    }

    configure(loadStories, module);
    ```

    There are three things to note here:

    1. Vuetify is initialized using the `./src/plugins/vuetify.js` file.
    2. The icons are loaded with the `import "@mdi/font/css/materialdesignicons.css";` statement.
    3. The decorator wraps every story in the `v-app` tag ensuring Vuetify tags are displayed correctly.

- Add the following to `./src/stories/common.stories.js`:

    ```
    /* eslint-disable import/no-extraneous-dependencies */
    import { storiesOf } from '@storybook/vue'

    import StatsCard from '@/components/common/StatsCard.vue'

    storiesOf('StatsCard', module)
      .add('stats-card default color', () => ({
        components: { StatsCard },
        template:
          '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits"/></v-flex></v-layout></v-container>'
      }))
      .add('stats-card green color', () => ({
        components: { StatsCard },
        template:
          '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits" color="green" icon="mdi-plus" /></v-flex></v-layout></v-container>'
      }))
    ```

- Run lint to correct formatting:

    ```
    $ npm run lint
    ```

- Test:

    ```
    $ npm run storybook:serve
    ```

[Go to Table of Contents](#toc)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Run Storybook

```
npm run storybook:serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

[Go to Table of Contents](#toc)

## Misc

- Make Prettier work with default Vue formatting options. Create a `.prettierrc.js` file in the project root directory with the following contents:

    ```
    module.exports = {
        semi: false,
        printWidth: 120,
        singleQuote: true
    };
    ```

    **NOTE** See [Prettier documentation](https://prettier.io/docs/en/options.html) for other options that can be customized.

    Run lint to correct formatting:

    ```
    $ npm run lint
    ```

- Disable the "terminate statement" warning in Webstorm that shows up after changing the Prettier option `semi: false`:

    - File > Settings... > Editor > Code Style > JavaScript
    - Click the `Punctuation` tab
    - Set `Don't use` semicolon to terminate statements `always`

- Add an alias for the `tests` directory:

    Create the `vue.config.js` file and add the following contents, so that the alias is available in `src`:

    ```
    const path = require('path')
    module.exports = {
      chainWebpack: config => {
        config
          .resolve
          .alias
          .set('@tst', path.resolve(__dirname, 'tests'))
      }
    }
    ```

    Add the following entry to the `jest.config.js` file, so that the alias is available to Jest:

    ```
    module.exports = {
      moduleNameMapper: {
        '^@tst/(.*)$': '<rootDir>/tests/$1'
      }
    }
    ```

[Go to Table of Contents](#toc)

## Roadmap

Currently the following is on the roadmap.

[ ] i18n
[ ] Add storybook-addon-vue-info
[ ] Add actions-addon
[ ] Add backgrounds-addon
[ ] Add chapters-addon
[ ] Add console-addon
[ ] Add info-addon
[ ] Add intl-addon
[ ] Add knobs-addon
[ ] Add links-addon
[ ] Add notes-addon
[ ] Add options-addon
[ ] Add storysource-addon
[ ] Add viewport-addon

Any other suggestions? Please submit an issue.

[Go to Table of Contents](#toc)

## Contributing

We welcome pull requests! What follows is the simplified version of the contribution process, please read [here](./CONTRIBUTING.md) to fully understand our contribution policy and [here](./CODE-OF-CONDUCT.md) to understand our code of conduct.

1. Fork the repository [here](https://github.com/nidkil/vuetify-with-storybook)!
2. Create your feature branch: `git checkout -b my-new-feature`
3. If relevant, don't forget to add your tests
4. Commit your changes: `npm run commit`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :-)

> **TIP** Learn all about forking a repo [here](https://help.github.com/articles/fork-a-repo/). More information on cloning a repo [here](https://github.com/nidkil/vuetify-with-storybook).

[Go to Table of Contents](#toc)

## Support & brag about us

If you like this project, please support us by starring ⭐ [this](https://github.com/nidkil/vuetify-with-storybook) repository. Thx!

Please let the world know about us! Brag about us using Twitter, email, blog, Discord, Slack, forums, etc. etc. Thx!

[Go to Table of Contents](#toc)

## Author

**nidkil** © [nidkil](https://github.com/nidkil), released under the [MIT](LICENSE.md) license.
Authored and maintained by nidkil with help from [contributors](https://github.com/nidkil/vuetify-with-storybook/contributors).

> [Website](https://nidkil.me) · GitHub [@nidkil](https://github.com/nidkil) · Twitter [@nidkil](https://twitter.com/nidkil)
