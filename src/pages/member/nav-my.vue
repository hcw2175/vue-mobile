<style scoped lang="scss" type="text/scss">
  @import "~variables";

  .header {
    @include box-shadow();

    padding: rem(25px);
    background-color: $primary;
    background-image: -webkit-linear-gradient(top, $blue-dark-2, $blue-1);
    background-image: linear-gradient(to bottom, $blue-dark-2, $blue-1);
    text-align: center;
  }
</style>

<template>
  <div>
    <div class="fadeIn">

      <div class="header">
        <img src="~img/avatar.png" width="100" height="100" class="img-circle"/>

        <div class="color-white font-l margin-top">hucw</div>
      </div>

    </div>

    <app-nav navId="my"></app-nav>
  </div>
</template>

<script>
  import AppNav from '@/components/app-nav.vue';

  export default{
    name: "my",
    components: {
      "app-nav": AppNav
    }
  }
</script>
