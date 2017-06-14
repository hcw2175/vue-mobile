<style lang="scss" scoped type="text/scss">
  @import "~variables";

  .btn{
    margin-right: 5px;
    margin-bottom: 5px;
  }
</style>

<template>
<div>
  <div class="padding align-center">
    <h2>Button</h2>
  </div>

  <div class="padding">
    <p>默认样式</p>
    <div class="bg-white padding">
      <mt-button class="btn">默认</mt-button>
      <mt-button class="btn btn-primary">primary</mt-button>
      <mt-button class="btn btn-success">success</mt-button>
      <mt-button class="btn btn-danger">danger</mt-button>
      <mt-button class="btn btn-info">info</mt-button>
      <mt-button class="btn btn-warn">warn</mt-button>
      <mt-button class="btn btn-link">link</mt-button>
    </div>
  </div>

  <div class="padding margin-top-m">
    <p>按钮大小</p>
    <div class="bg-white padding">
      <mt-button class="btn btn-xs">btn-xs</mt-button>
      <mt-button class="btn btn-sm">btn-sm</mt-button>
      <mt-button class="btn">默认</mt-button>
      <mt-button class="btn btn-lg">超大</mt-button>
    </div>
  </div>

  <div class="padding margin-top-m">
    <p>禁用</p>
    <div class="bg-white padding">
      <mt-button class="btn" disabled>禁用</mt-button>
      <mt-button class="btn btn-primary" disabled>primary</mt-button>
    </div>
  </div>

  <div class="padding margin-top-m">
    <p>块级元素</p>
    <div class="bg-white padding">
      <mt-button class="btn btn-block">块级元素</mt-button>
      <mt-button class="btn btn-primary btn-block">primary</mt-button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'ui-buttons'
  }
</script>
