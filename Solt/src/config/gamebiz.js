window.GAME_BIZ ={
  // 初始化
  init() {
    console.log('init biz');
    return Promise.resolve();
  },
  // 加载完成
  loaded() {
    console.log('loaded biz');
  },
  // 开始
  start() {
    console.log('start biz');
    return Promise.resolve();
  },
  // 结束
  stop() {
    console.log('stop biz');
    // alert('中奖啦')
  }
}
