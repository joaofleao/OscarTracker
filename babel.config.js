module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@features': './src/features',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@styles': './src/styles',
            '@types': './src/types',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
