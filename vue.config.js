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
          token: '9e35bcfa3260fc7d31c891bfe1b1a3827e5b9965',
          releaseType: 'release',
          publishAutoUpdate: true,
        },
      },
    },
  },
};
