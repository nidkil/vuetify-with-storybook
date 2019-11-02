const path = require("path");

module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    // find the rule that applies to vue files
    const vueRuleIndex = config.module.rules.findIndex(rule => (rule.loader || '').includes('vue-loader'));
    const vueRule = config.module.rules[vueRuleIndex]
    delete vueRule.loader;
    const vueRuleOptions = vueRule.options;
    delete vueRule.options;
    vueRule.use = [
        {
            loader: require.resolve('vuetify-loader/lib/loader'),
        },
        {
            loader: require.resolve('vue-loader'),
            options: vueRuleOptions,
        },
    ];

    config.module.rules.push(
        {
            test: /\.s(a|c)ss$/,
            use: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')],
            include: path.resolve(__dirname, '../'),
        },
        {
            test: /\.styl$/,
            use: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('stylus-loader')],
            include: path.resolve(__dirname, '../'),
        },
        {
            test: /\.stories\.jsx?$/,
            loader: '@storybook/addon-storysource/loader',
            options: {
                semi: false,
                printWidth: 120,
                singleQuote: true
            }
        },
    );

    config.resolve.extensions.push(".scss", ".styl");

    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
        "~": path.resolve(__dirname, "../src/components"),
    };

    // Return the altered config
    return config;
};
