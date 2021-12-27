const path = require("path");
const rootPath = path.resolve(__dirname, "../");
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: "sass-resources-loader",
          options: {
            resources: ["./src/assets/variables.scss"],
          },
        },
      ],
      include: rootPath,
    });
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-scss"],
  framework: "@storybook/vue3",
};
