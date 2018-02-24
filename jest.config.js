module.exports = {
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    testMatch: ["**/*.spec.(ts|tsx|js)"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "node", "json"],
    transformIgnorePatterns: ["node_modules"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    setupFiles: [
        "<rootDir>/setupTests.js"
    ]
};