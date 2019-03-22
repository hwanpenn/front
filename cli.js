#!/usr/bin/env node
//nodejs命令行参数解析工具
const yParser = require('yargs-parser');
//文件系统
const { existsSync, readdirSync } = require('fs');
//路径
const { join } = require('path');
//版本控制规范
const semver = require('semver');
//颜色插件
const chalk = require('chalk');
//递归创建目录及其子目录
const mkdirp = require('mkdirp');
//命令行与用户交互工具
const inquirer = require('inquirer');
//复制到剪切板插件
const clipboardy = require('clipboardy');

const execa = require('execa');

if (!semver.satisfies(process.version, '>= 8.0.0')) {
  console.error(chalk.red('✘ The generator will only work with Node v8.0.0 and up!'));
  process.exit(1);
}

const params = yParser(process.argv.slice(2));
// console.log("args",params)
const args = [
  `clone`,
  `http://www.gjj12329.cn:81/front-static-file/shineyue-pro.git`,
  `--depth=1`,
  params._,
];
console.log(`${chalk.gray('>')} git ${args.join(' ')}`);
require('execa')(
  `git`,
  args,
).then(result => {
  console.log(result.stderr);
  //=> 'hello world'
});;

// (async () => {
//   const {stdout} = await execa('git', args);
//   console.log("");
// })()