import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/layout')// 布局组件
const Home = () => import('@/views/home') // 主页组件
const Question = () => import('@/views/question')// 问答组件
const Video = () => import('@/views/video')// 问答组件
const User = () => import('@/views/user')// 个人中心
const Profile = () => import('@/views/user/profile') // 个人中心下的编辑资料
const Chat = () => import('@/views/user/chat') // 个人中心下的小智同学
const Login = () => import('@/views/login') // 登录组件
const Article = () => import('@/views/article') // 文章详情
const Search = () => import('@/views/search') // 搜索中心
const SearchResult = () => import('@/views/search/result') // 搜索结果

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout, // 一级路由
    children: [{
      path: '/',
      component: Home // 二级路由 首页
    },
    {
      path: '/question',
      component: Question // 二级路由 问答组件
    },
    {
      path: '/video',
      component: Video // 二级路由 视屏组件
    },
    {
      path: '/user',
      component: User // 二级路由 个人中心
    }]
  },
  {
    path: '/user/profile',
    component: Profile // 个人中心下的编辑资料 一级路由
  },
  {
    path: '/user/chat', // 个人中心下的小智同学  一级路由
    component: Chat
  },
  {
    path: '/login', // 登录组件  一级路由
    component: Login
  },
  {
    path: '/article', // 文章详情  一级路由
    component: Article
  },
  {
    path: '/search', // 搜索中心  一级路由
    component: Search
  },
  {
    path: '/search/result', // 搜索结果  一级路由
    component: SearchResult
  }

]

const router = new VueRouter({
  routes
})

export default router
