module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/pages/api/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@components$": "<rootDir>/components",
    "^@partials$": "<rootDir>/partials",
    "^@common$": "<rootDir>/common",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
