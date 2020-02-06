module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 基准值  因为我们做的是手机  手机以iphone6为主要适配  37.5 十分之一
      propList: ['*'] // 对所有的进行适配
    }
  }
}
