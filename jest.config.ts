import type { Config } from 'jest'

export default async (): Promise<Config> => ({
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/__tests__/**/*.spec.ts(x)?', '!src/apo/**'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
})
