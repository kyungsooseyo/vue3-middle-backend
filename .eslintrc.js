module.exports = {
  // ~表示当前目录即为根目录，ESlint规则将会被限制到该目录下
  root: true,
  env: {
    node: true
  },
  //  eslint中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
    // 'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 错误分三种 off或者0 关闭规则 warn或者1 开启规则，使用警告级别错误 不会导致程序退出，error 错误级别的错误，触发的时候会导致程序退出
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // ~ eslint与prettier 一般只又在这个位置有冲突，可以不用装插件 直接把这个off掉;就是函数名后面不非得跟个空格
    'space-before-function-paren': 'off'
  }
}
