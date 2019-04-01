module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    // parserOptions: {
    //     parser: "babel-eslint"
    // },
    extends: ["airbnb-base"],
    rules: {
        "no-tabs": 0,
        indent: ["error", 4],
        "linebreak-style": 0,
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
    },
    globals: {
        "$geni": true
    },
    settings: {
        "import/resolver": {
            webpack: "webpack.config.js"
        },
    }
};
