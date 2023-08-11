<template>
  <view class="search">
    <uni-search-bar @input="input" @focus="FocusEvent" cancelButton="none" radius="30" bgColor="#ffffff"
      placeholder="搜索商品"></uni-search-bar>
  </view>
</template>

<script>
  export default {
    name: 'my-search',
    data() {
      return {}
    },
    methods: {
      input(e) {
        this.$emit('input', e)
      },
      FocusEvent() {
        this.$emit('focus')
      },
    }
  }
</script>

<style lang="scss">
  .search {
    background: #f1f1f2;
  }

  ::v-deep .uni-searchbar__box[data-v-180dbe05] {
    height: 40px;
  }
</style>