module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["prettier", "plugin:vue/recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "vue/no-v-html": 0, // Prevent warnings being thrown as we use v-html in places.
    "vue/comment-directive": 0, // https://github.com/vuejs/eslint-plugin-vue/issues/1355
  },
};
