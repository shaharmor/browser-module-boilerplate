/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const mergeOptions = require('merge-options');
const jestTSJestPreset = require('ts-jest/jest-preset');
const jestPuppeteerPreset = require('jest-puppeteer/jest-preset');
const { compilerOptions } = require('./tsconfig');

module.exports = mergeOptions(
  {
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  jestTSJestPreset,
  jestPuppeteerPreset
);
