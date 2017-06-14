<style scoped lang="scss" type="text/scss">
  @import "~variables";

  .empty-icon {
    font-size: rem(80px);
  }
</style>

<template>
  <div>
    <div class="padding align-center bg-gray" v-show="isLoading && !isEmpty">
      <div class="inline-block">
        <mt-spinner type="double-bounce" color="#bbbec4" :size="28"></mt-spinner>
      </div>
      <p class="font-lighter margin-top-s">努力加载中...</p>
    </div>

    <div v-show="!isLoading && !isEmpty">
      <slot></slot>
    </div>

    <div class="padding-m align-center font-light" v-show="isEmpty">
      <i class="iconfont icon-sad empty-icon"></i>
      <p class="font-lighter margin-top">这里什么都没有</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: "app-view",
    computed: {
      isLoading: function () {
        return this.$store.state.showLoading;
      },
      isEmpty: function () {
        return this.$store.state.showEmptyView;
      }
    }
  }
</script>
