<style scoped lang="scss" type="text/scss">
  @import "~variables";
  .block-center{
    width: 100%;
    padding: rem(20px);
  }

  .icon-sec{
    font-size: 80px;
  }

</style>

<template>
  <div class="full-height valign-center">
    <div class="align-center block-center font-light">
      <i class="fa fa-shield icon-sec"></i>

      <p class="margin-top-m font-size">为了您的账号安全，请先绑定手机号码</p>

      <hr/>

      <div class="padding-top-m">

        <p>
          <form-field type="tel" name="mobile" :value="mobile" label="手机号码" placeholder="请输入手机号"
                      v-validate="'required'"
                      :error-msg="errors.first('mobile')"></form-field>
        </p>
        <p>
          <form-field type="tel" name="smsCode" :value="smsCode" label="验证码" placeholder="请输入验证码"
                      v-validate="'required'"
                      :error-msg="errors.first('smsCode')">
            <mt-button size="small" :disabled="canSendCode">获取</mt-button>
          </form-field>
          <!--<mt-field label="验证码" placeholder="验证码" type="number" v-model="smsCode">
            <mt-button size="small" :disabled="canSendCode">获取</mt-button>
          </mt-field>-->
        </p>

        <div class="padding-top-l">
          <mt-button class="btn btn-primary btn-block">立即绑定</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "bind-mobile",
    data: function () {
      return {
        mobile: "15817182175",
        smsCode: "",

        canSendCode: true
      };
    },
    created: function () {
        console.log(this.mobile);
    }
  }
</script>
