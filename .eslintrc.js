module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // 继承 ESLint 的规则集
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [
    // 处理vue文件
    {
      files: ["**/*.vue"],
      extends: ["plugin:vue/vue3-recommended"],
    }
  ]
}
