import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import * as tsConfig from './tsconfig.json';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/' }),
};

export default config;
