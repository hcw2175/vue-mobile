<style scoped lang="scss" type="text/scss">
  @import "~variables";

  .login-container{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    @extend %valign-center;

    background-color: $page_bg;
    background-image: -webkit-linear-gradient(top, $page_bg, $gray-light);
    background-image: linear-gradient(to bottom, $page_bg, $gray-light);
  }

  .weclome{
    font-size: $font-size-l;
    font-weight: 400;
    height: rem(100px);
  }

  .form-group{
    display: block;
    margin-top: rem(12px);

    i{
      font-size: 20px;
      margin-right: rem(12px);
      color: $font-light;
      vertical-align: middle;
    }

    input {
      padding: rem(8px) 0;
      border: 0;
      @include border(bottom);
      width: rem(200px);
      background-color: $transparent;
      font-size: 16px;
    }
  }

  .btn-block{
    display: block;
    width: 100%;
    margin-top: rem(50px);
    border-radius: rem(25px);
  }
</style>

<template>
<div class="login-container">
  <div class="block-center align-center">
    <div class="weclome">欢迎登录品智云</div>

    <label class="form-group">
      <i class="fa fa-user"></i>
      <input type="text" name="loginName" placeholder="用户名"/>
    </label>

    <label class="form-group">
      <i class="fa fa-lock"></i>
      <input type="password" name="loginPwd" placeholder="密码"/>
    </label>


    <x-button type="primary" class="btn-block">登录</x-button>
  </div>
</div>
</template>

<script>
    export default{
      name: "login"
    }
</script>
