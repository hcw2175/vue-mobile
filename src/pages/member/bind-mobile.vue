<style scoped lang="scss" type="text/scss">
  @import "~variables";
  .block-center{
    width: 100%;
    padding: rem(20px);
  }


</style>

<template>
  <div class="full-height valign-center">
    <div class="align-center block-center font-light">
      <i class="fa fa-check-circle icon-xxl color-success"></i>

      <p class="margin-top-m">为了您的账号安全</p>
      <p>请先绑定手机号码</p>

      <hr/>

      <p><mt-field label="手机号码" placeholder="请输入手机号" type="tel" v-model="mobile"></mt-field></p>
      <p>
        <mt-field label="验证码" placeholder="验证码" type="number" v-model="smsCode">
          <mt-button size="small" :disabled="canSendCode">获取验证码</mt-button>
        </mt-field>
      </p>

      <mt-button class="btn btn-block" type="primary">立即绑定</mt-button>

      <div class="padding">
        <mt-button class="btn ">立即绑定</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "bind-mobile",
    data: function () {
        return {
          mobile: "",
          smsCode: "",

          canSendCode: true
        }
    },
    created: function () {
      console.log(this.$route);
    }
  }
</script>
