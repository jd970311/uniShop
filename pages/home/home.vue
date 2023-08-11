<template>
  <view>
    <!--  -->
    <my-search @input="InputEvent" @focus="FocusEvent"></my-search>
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay :interval="3000" :duration="1000">
      <swiper-item>
        <image src="../../static/tabbar/cart.png" mode=""></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  import { getData } from '@/api/home.js'
  export default {
    data() {
      return { timer: null }
    },
    methods: {
      //输入框搜索加防抖(只执行最后一次)
      InputEvent(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          console.log(e)
        }, 500)
      },
      // 聚焦事件e
      FocusEvent() {
        console.log(11111)
      },
      // 初始化数据
      async getHomeData() {
        const res = await getData({ pageId: 0 })
        console.log(res, 'res')
      },
    },
    mounted() {
      // 
      this.getHomeData()
    }
  }
</script>

<style lang="scss">

</style>