import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    verbose: true,
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/jest/__tests__/*.spec.ts(x)?'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    modulePaths: ['<rootDir>/src/'],
    transform: {
      '^.+\\.(js,jsx,ts,tsx)$': ['babel-jest', { presets: ['next/babel'] }]
    }
  }
}
