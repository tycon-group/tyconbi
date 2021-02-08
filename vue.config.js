module.exports = {
  publicPath: '/tyconbi/',
  outputDir: 'tyconbi',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: {
          provider: 'github',
          repo: 'https://github.com/tycon-group/tyconbi',
          owner: 'tycon-group',
          releaseType: 'release',
          publishAutoUpdate: true,
        },
      },
    },
  },
};
