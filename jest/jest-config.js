module.exports = {
  preset: "ts-jest",
  rootDir: "../",
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
    "^.+\\.js?$": "<rootDir>/jest/jest-preprocess.js"
  },
  testMatch: [
    "**/?(*.)+(spec|test).ts?(x)",
    "**/?(*.)+(spec|test).js?(x)",
    "**/__tests__/**/*.ts?(x)",
    "**/__tests__/**/*.js?(x)"
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/__mocks__/file-mock.js"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache", "public"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/", "node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: ""
  },
  setupFiles: ["<rootDir>/jest/loadershim.js"]
};
