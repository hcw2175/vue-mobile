<style scoped lang="scss" type="text/scss">
  @import "~variables";

  .app-nav-tabbar {
    max-width: $max-width;
    height: rem($nav-bottom-height);

    .nav-item {
      color: $font-light;
      padding: rem(6px) 0;

      .margin-top-s{
        margin-top: rem(7px) !important;
      }
    }

    .nav-item.is-selected {
      color: $primary;
    }
  }
</style>

<template>
  <div class="app-nav">
    <mt-tabbar class="app-nav-tabbar" :fixed="true" v-model="currentNavId">
      <mt-tab-item id="home" class="nav-item" @click.native="$router.push('/home')">
        <i class="fa fa-home icon-default"></i>
        <div class="margin-top-s">首页</div>
      </mt-tab-item>
      <mt-tab-item id="devices" class="nav-item" @click.native="$router.push('/devices')">
        <i class="fa fa-leaf icon-default"></i>
        <div class="margin-top-s">设备</div>
      </mt-tab-item>
      <mt-tab-item id="orders" class="nav-item" @click.native="$router.push('/orders')">
        <i class="fa fa-file-text icon-default"></i>
        <div class="margin-top-s">商城</div>
      </mt-tab-item>
      <mt-tab-item id="my" class="nav-item" @click.native="$router.push('/my')">
        <i class="fa fa-user icon-default"></i>
        <div class="margin-top-s">我</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default{
    name: "app-nav",
    props: ["navId"],
    data: function () {
      return {
        currentNavId: this.navId
      };
    }
  }
</script>
