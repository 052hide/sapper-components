const sveltePreprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "svelteOptions": {
    "preprocess": sveltePreprocess({
      sourceMap: dev,
      postcss: true
    }),
  }
}