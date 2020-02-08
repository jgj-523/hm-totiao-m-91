// 专门处理用户信息的存储删除以及获取   放置在localStorge

const USER_TOKEN = 'heima-toutiao-m-91-token' // 这个key专门用来存储 用户信息
// 设置用户信息
export function setUser (user) {
  localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 读取用户信息
export function (){
  return JSON.parse (localStorage.getItem(USER_TOKEN) || '{}') // 短路表达式
}
// 删除用户信息
export function (){
    localStorage.removeItem(USER_TOKEN)
}
