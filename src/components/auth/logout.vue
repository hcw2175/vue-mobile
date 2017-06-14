<template>
  <div class="full-height valign-center">
    <div class="align-center block-center font-light">
      <div class="inline-block">
        <mt-spinner type="double-bounce" color="#bbbec4" :size="28"></mt-spinner>
      </div>
      <p class="margin-top">正在登出系统，请稍候...</p>
    </div>
  </div>
</template>

<script>
  import App from '@/assets/scripts/app';
  import MutationTypes from "@/store/mutation-types";

  export default{
    name: "logout",
    created: function () {
      this.$http.post(this.$basehost + "/logout")
        .then((resp) => {

          // 获取重定向路径
          let redirect = "";
          const role = this.$store.getters[MutationTypes.oauth.getRole];
          if(role === "USER") {
            const curShop = this.$store.getters[MutationTypes.oauth.getCurShop];
            redirect = "/shop_" + curShop.id;
          } else {
            redirect = "/wos";
          }

          // 清理授权信息
          this.$store.commit(MutationTypes.oauth.updateAuthToken, "");
          this.$store.commit(MutationTypes.oauth.updateCurUser, null);
          this.$store.commit(MutationTypes.oauth.updateCurShop, null);

          // 重新登录
          this.$router.replace({
            path: "/login",
            query: {redirect: redirect}
          })
        })
    }
  }
</script>
