// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // root of your Next.js app (optional)
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  testEnvironment: "node", // or "jsdom" depending on your use case
};

module.exports = createJestConfig(customJestConfig);