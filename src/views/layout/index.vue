<template>
  <div class="container">
    <!-- 可以采用vant的导航组件来实现 -->
    <van-nav-bar v-if="showNavBar" fixed title="黑马头条" right-text="搜索"></van-nav-bar>
    <!-- 二级的路由容器  首页  问答 视屏 我的 -->
    <!-- :class="{  名称 ： 布尔值}" -->
    <div class="my-wrapper" :class="{ noTop : !showNavBar}" >
      <!-- 二级路由部分 -->
      <router-view></router-view>
    </div>
    <!-- 标签栏  route 开启路由模式  :route='true'(布尔类型) route='true'(字符串类型) -->
    <van-tabbar route>
      <!-- router-link to -->
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/question' icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to='/video' icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to='/user' icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    // 是否显示vavbar
    showNavBar () {
      // this  指向 组件实例
      return this.$route.path !== '/user'
    }
  }
}
</script>

<style lang="less" scoped>
//scoped  只对当前组件有效  data-v-随机字符串  表示属性唯一
// less-loder > css-loder > style-loder
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}
</style>
