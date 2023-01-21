module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  globalSetup: '<rootDir>/__tests__/setupEnv.ts',
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup*.(js|tsx?)*',
    '<rootDir>/__tests__/fixtures.ts',
    '<rootDir>/__tests__/fixtures/*.(js|tsx?)*',
    '<rootDir>/__tests__/hooksResult.ts',
    '<rootDir>/__tests__/mocks/*.(js|tsx?)*',
    '<rootDir>/__tests__/react-dom-instance.js',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/__tests__/mocks/svgMock.tsx',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
}
