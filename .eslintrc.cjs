module.exports = {
    extends: [
        "react-app",
        "react-app/jest",
        "airbnb",
        "airbnb-typescript",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "import/prefer-default-export": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
}