module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          alias: {
            screens: "./screens",
            navigation: "./navigation",
            components: "./components",
            atoms: "./atoms",
            helpers: "./helpers",
            typings: "./typings",
            themes: "./themes",
            constants: "./constants",
            modals: "./modals",
            config: "./config"
          },
        },
      ],
    ],
  };
};
