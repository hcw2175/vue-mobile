<style lang="scss" scoped>
  @import "~variables";

  .header {
    padding: rem(25px);
    background-color: $primary;
    background-image: -webkit-linear-gradient(top, $blue-dark-2, $blue-1);
    background-image:         linear-gradient(to bottom, $blue-dark-2, $blue-1);
    text-align: center;
  }
</style>

<template>
  <div>
    <div class="header">
      <img src="~img/avatar.png" width="100" height="100" class="img-circle"/>

      <div class="color-white font-l margin-top">hucw</div>
    </div>

    <img src="~img/test.jpg"/>
  </div>
</template>

<script>
  export default {
    name: 'member'
  }
</script>
