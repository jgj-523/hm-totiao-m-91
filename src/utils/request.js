import axios from 'axios'
import JSONBig from 'json-bigint'
import store from '@/store'

// 创建一个axios实例 和原来的axios没有关系
const instance = axios.create({
  // 构造函数
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0', // 设置请求地址常量
  transformResponse: [function (data) {
    // data就是后端响应的字符串  默认的转化是JSON.parse  处理大数字有问题 所以要转换成JSONBigint
    // data ? JSONBig.parse(data) : {}
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
})
// 请求拦截器
instance.interceptors.request.use(function (config) {
  // config 就是请求的参数
  if (store.state.user.token) {
    // 统一注入token
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
  }
}, function (error) {
  // 返回失败
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.request.user(function (response) {
  // 得到response实际上被axios包了一层数据
  try {
    // 将数据解构
    return response.data.data
  } catch (error) {
    return response.data
  }
}, function (error) {
  // 返回失败
  return Promise.reject(error)
})
export default instance
