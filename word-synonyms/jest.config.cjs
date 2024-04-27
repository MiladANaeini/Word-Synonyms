// Tellong jest to use jest-Dom as a testing environment
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
};
