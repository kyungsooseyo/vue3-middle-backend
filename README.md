# vue3-middle-backend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 1.代码格式化的规范

- 在初始化项目的时候可以选择eslint

- 如果使用vscode话，安装prettier插件

- 在项目下创建.prettierrc文件,内容如下

  ```js
  {
    "semi": false, // 结尾不加分号
    "singleQuote": true, // 字符串使用单引号
    "trailingComma": "none"// 如果是结尾不加逗号
  }
  ```

​	

- 然后打开vscode设置 搜搜format on save 勾选，再保存的时候就会格式化代码；除此之外eslint希望一个tab是2个空格，vscode默认是4个，所以需要修改tab size为2；如果还安装了其他的格式化插件，在代码界面右键配置默认格式化的插件为prettier

- prettier和eslint默认是有些冲突的，不过这个冲突目前体现在函数后空格的问题，可以通过如下设置解决，在.eslintrc.js中,添加最后一项，除此之外还可以通过**eslint-config-prettier**等插件来进行配置解决，不过暂时可能不需要

- ```js
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // ~ eslint与prettier 一般只又在这个位置有冲突，可以不用装插件 直接把这个off掉;就是函数名后面不非得跟个空格
      'space-before-function-paren': 'off'
    }
  ```

### 2.git提交规范

#### 2.1全局安装commitizen

```
mpm i -g commitizen@4.2.3
```

#### 2.2 在项目下安装并配置cz-cutstomizable

```
npm i cz-customizable@6.3.0 -D
```

#### 2.3 添加以下配置到package.json中

```js
"config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  }
```

#### 2.4 在项目根目录下创建.cz-config.js 自定义提示文件

```js
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式变更' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 测试' },
    { value: 'build', name: 'build: 构建' },
    { value: 'ci', name: 'ci: CI/CD' },
  ],
  // 步骤
  messages: {
    type: '选择提交类型:',
     //~ 修改文件的范围 
    customScope: '选择提交范围(可选):',
    subject: '填写提交标题(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认提交?(y/n)',
  },
  // 跳过步骤
  skipQuestions: ['body', 'footer'],
  subjectLimit: 100,

}
```

#### 2.5 然后在 git add操作之后，执行git cz命令，通过命令行选中进行提交

#### 2.6 如果有人代码格式本身就是错的，还要向上提交的话(即他可能没把自动保存格式化那个勾选上)，就需要用到husky了

1. 执行 npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"，如果执行不成功需要先执行下git init,npx husky-init;（husky是需要安装的，可以先安装下）

2. 通过以上操作就会生成一个文件夹，可以检测src目录下的js vue文件的格式是否正确，如有需要也自行添加其他类型的文件如tsx等

3. lint-staged使用vue脚手架会自动帮我们安装，lint-stage可以让你当前的代码检查只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送

4. 修改package.json配置 如下

5. ````js
   "lint-staged": {
      "src/**/*.{js,vue}": [
        "eslint --fix",
        "git add"
      ]
    },
   ````

6. 修改 .husky/pre-commit 文件

7. ````
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   
   npx lint-staged
   ````

8. 