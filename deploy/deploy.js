const scpClient = require('scp2');
const ora = require('ora');
const chalk = require('chalk');

const serverObj = require('./config');

const spinner = ora(`正在发布到(${process.env.NODE_ENV === 'production' ? '生产' : '测试'})服务器...`);
spinner.start();

const server = process.env.NODE_ENV === 'production' ? serverObj.prod : serverObj.test;

scpClient.scp(
  'dist/',
  {
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password,
    path: server.path,
  },
  (err) => {
    spinner.stop();
    if (err) {
      console.log(chalk.red('发布失败.\n'));
      throw err;
    } else {
      console.log(chalk.green(`Success! 成功发布到(${process.env.NODE_ENV === 'prod' ? '生产' : '测试'})服务器! \n`));
    }
  },
);
