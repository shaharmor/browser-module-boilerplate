const webpackConfig = require('./webpack.config').default;

delete webpackConfig.entry;

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    files: [
      'src/**/*.test.ts',
      // 'public/karma/*'
    ],
    preprocessors: {
      '**/*.test.ts': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage-istanbul'],
    webpack: webpackConfig,
    browsers: ['Chrome'],
    autoWatch: true,
  });
};
