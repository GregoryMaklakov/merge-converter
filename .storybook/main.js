/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require("path");

const previewAnnotations = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, "../components"));
    return config;
  },
};
export default previewAnnotations;
