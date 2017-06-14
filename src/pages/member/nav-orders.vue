<style scoped lang="scss" type="text/scss">
</style>

<template>
  <div>
    <div class="fadeIn">
      订单管理页面
    </div>

    <app-nav navId="orders"></app-nav>
  </div>
</template>

<script>
  import AppNav from '@/components/layouts/app-nav.vue';

  export default{
    name: "orders",
    components: {
        "app-nav": AppNav
    }
  }
</script>
