module.exports = {
  globals: { __PATH_PREFIX__: "" },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/file-mock.ts",
  },
  modulePathIgnorePatterns: ["\\.cache"],
  setupFiles: ["<rootDir>/loadershim.ts"],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.ts"],
  testEnvironment: "jest-environment-jsdom-global",
  testEnvironmentOptions: { url: "http://localhost" },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.ts",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.ts",
  },
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
};
