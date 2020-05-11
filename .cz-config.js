/**
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-05-11 17:19:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-11 17:45:40
 */
// type: commit 的类型
// 参考：https://juejin.im/post/5afc5242f265da0b7f44bee4
// feat: 新特性
// fix: 修改问题
// docs: 文档修改
// style: 代码格式修改, 注意不是 css 修改
// refactor: 代码重构
// chore: 其他修改, 比如构建流程, 依赖管理.
// subject: commit 的概述, 建议符合  50/72 formatting
// ...
module.exports = {
  types: [
    {
      value: 'feat',
      name : 'feat:     A new feature'
    },
    {
      value: 'fix',
      name : 'fix:      A bug fix'
    },
    {
      value: 'docs',
      name : 'docs:     Documentation only changes'
    },
    {
      value: 'refactor',
      name : 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name : 'perf:     A code change that improves performance'
    },
    {
      value: 'test',
      name : 'test:     Add missing tests or correcting existing tests'
    },
    {
      value: 'build',
      name : 'build:    Add missing tests or correcting existing tests'
    },
    {
      value: 'revert',
      name : 'revert:   Revert to a commit'
    }
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf', 'build', 'revert']
};