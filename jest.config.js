/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.(t|j)s$',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/apps/backend/tsconfig.spec.json',
        diagnostics: false,
      },
    ],
  },
  roots: ['<rootDir>/apps/backend/src'],
};
