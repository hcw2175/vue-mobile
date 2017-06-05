<style scoped lang="scss" type="text/scss">
  @import "~variables";

  .app-nav {
    /*.mint-tabbar {
      @include box-shadow(0, -1px, 5px, 0.2)
    }*/

    .mint-tabbar .mint-tab-item {
      color: $font-light;
      padding: rem(5px) 0;
    }
    .mint-tabbar .mint-tab-item.is-selected {
      color: $primary;
    }
  }
</style>

<template>
  <div class="app-nav">
    <mt-tabbar :fixed="true" v-model="navId">
      <mt-tab-item id="home" @click.native="onNavClick('home', '/')">
        <i class="fa fa-home icon-default"></i>
        <div class="margin-top-s">首页</div>
      </mt-tab-item>
      <mt-tab-item id="devices" @click.native="onNavClick('devices', '/devices')">
        <i class="fa fa-leaf icon-default"></i>
        <div class="margin-top-s">设备</div>
      </mt-tab-item>
      <mt-tab-item id="orders" @click.native="onNavClick('orders', '/orders')">
        <i class="fa fa-file-text icon-default"></i>
        <div class="margin-top-s">订单</div>
      </mt-tab-item>
      <mt-tab-item id="my" @click.native="onNavClick('my', '/my')">
        <i class="fa fa-user icon-default"></i>
        <div class="margin-top-s">我</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default{
    name: "AppNav",
    data: function () {
      return {
        navId: "home"
      }
    },
    created: function () {

    },
    methods: {
        onNavClick: function (navId, navRouter) {
          this.$store.commit("setNavId", navId);
          this.$router.push(navRouter);
        }
    }
  }
</script>
