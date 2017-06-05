<style lang="scss" scoped type="text/scss">
  @import "~variables";

  .fadein{
    @include fadeIn()
  }
  .fadeOut {
    @include fadeOut();
  }

</style>

<template>
<div class="app-view">
  <transition name="custom-classes-transition"
              enter-active-class="fadein"
              leave-active-class="fadeout">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
    export default{
      name: "AppView"
    }
</script>
