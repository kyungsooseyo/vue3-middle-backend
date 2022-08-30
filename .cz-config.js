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
    { value: 'fixCss', name: '样式修改' },
    { value: 'ci', name: 'ci: CI/CD' },
  ],
  // 步骤
  messages: {
    type: '选择提交类型:',
    // ~ 修改文件的范围
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
