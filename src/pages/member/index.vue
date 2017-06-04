<style lang="scss" scoped>
  @import "~@/assets/scss/exports.scss";

  .header {
    padding: rem(25px);
    background-color: $primary;
    background-image: -webkit-linear-gradient(top, #2F8CFC, #03A9F4);
    background-image:         linear-gradient(to bottom, #2F8CFC, #03A9F4);
    text-align: center;
  }

  .header-title{

  }
</style>

<template>
  <div>
    <div class="header">
      <img src="~img/avatar.png" width="100" height="100" class="img-circle"/>

      <h2 class="color-white">hucw</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'member'
  }
</script>
