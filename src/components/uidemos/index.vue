<style lang="scss" scoped type="text/scss">
  @import "~variables";

  .row {
    @include make-row();
  }

  .col {
    @include make-xs-column(3);
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 16px;
    font-weight: 500;
  }
</style>

<template>
<div>
  <div class="row">
    <div class="col">
      <router-link to="/ui/buttons">Buttons</router-link>
    </div>
    <div class="col">Cell</div>
    <div class="col">Cell</div>
    <div class="col">Cell</div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'moduleName'
  }
</script>
