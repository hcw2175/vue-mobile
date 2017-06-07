<style scoped lang="scss" type="text/scss">
</style>

<template>
  <div>
    <div class="fadeIn">
      设备管理页面
    </div>

    <app-nav navId="devices"></app-nav>
  </div>
</template>

<script>
  import AppNav from '@/components/layouts/app-nav.vue';

  export default{
    name: "devices",
    components: {
      "app-nav": AppNav
    }
  }
</script>
