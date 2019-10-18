// https://eggjs.org/zh-cn/basics/schedule.html

module.exports = {
  schedule: {
    interval: '10s', // 间隔
    // type: 'all', // 指定所有的 worker 都需要执行
    type: 'worker', // 随机一个worker来执行
  },
  async task (ctx) {
    ctx.logger.info('heart ~~ ...');
  },
};
