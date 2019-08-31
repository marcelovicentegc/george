module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test/spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  verbose: true
};
