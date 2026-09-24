module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.{spec,test}.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  testTimeout: 30000,
  maxConcurrency: 16,
};
