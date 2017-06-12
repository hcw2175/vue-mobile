<style scoped lang="scss" type="text/scss">
  @import "~variables";

  .appbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: $max-width;
    height: rem($nav-bottom-height);
  }

  .appbar-item{
    color: $font-light;
    padding: rem(6px) 0;
    font-size: $font-size-s;
  }

  .weui-tabbar__icon{
    width: auto !important;
    height: auto !important;
  }
</style>

<template>
  <div class="app-nav">
    <flexbox></flexbox>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default{
    name: "app-nav",
    components: {
      Tabbar,
      TabbarItem
    },
    props: ["navId"],
    data: function () {
      return {
        currentNavId: this.navId
      };
    }
  }
</script>
