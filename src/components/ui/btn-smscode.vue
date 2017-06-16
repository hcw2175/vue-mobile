<style scoped lang="scss" type="text/scss">
  @import "~variables";
</style>

<template>
  <div>
    <button type="button" class="btn btn-default btn-sm"
            :disabled="!(disabled && smsSec===60)"
            @click="sendSmsCode">
      {{btnSmsCodeText}}
    </button>
  </div>
</template>

<script>
  import App from "scripts/app";

  export default{
    name: "btnSmsCode",
    props: ["mobile", "disabled"],
    data: function () {
      return {
        btnSmsCodeText: "获取",
        smsSec: 60,
        smsInterval: 0
      };
    },
    methods: {
      sendSmsCode: function () {
        this.$loading.show();
        setTimeout(() => {
          this.$http.post(this.$apihost + "/sms/sendCode", {mobile: this.mobile})
            .then((respData) => {
              let msg = "短信验证码发送成功";
              if(!App.isProduct){
                  msg += "，验证码：" + respData.errMsg;
              }
              this.$toast.success({
                message: msg
              });
              this.startInterVal();
              this.$loading.hide();
            });
        }, 1000)
      },

      startInterVal: function () {
        this.smsInterval = setInterval(() => {
          this.smsSec--;
          this.btnSmsCodeText = this.smsSec + "s";

          if (this.smsSec === 0) {
            this.$loading.close();
            this.resetInterVal();
          }
        }, 1000);
      },

      resetInterVal: function () {
        clearInterval(this.smsInterval);
        this.smsSec = 60;
        this.smsInterval = 0;
        this.btnSmsCodeText = "重新获取";
      }
    },
  }
</script>
