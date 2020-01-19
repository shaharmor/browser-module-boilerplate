// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig');

const mergeOptions = require('merge-options');
const jestTSJestPreset = require('ts-jest/jest-preset');
const jestPuppeteerPreset = require('jest-puppeteer/jest-preset');

module.exports = mergeOptions(
  {
    // moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  jestTSJestPreset,
  jestPuppeteerPreset
);
