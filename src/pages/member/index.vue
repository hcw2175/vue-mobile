<style scoped lang="scss" type="text/scss">
</style>

<template>
  <div class="full-height valign-center">
    <div class="align-center block-center font-light">
      <div class="inline-block">
        <mt-spinner type="double-bounce" color="#bbbec4" :size="28"></mt-spinner>
      </div>
      <p class="margin-top">正在为您跳转，请稍候...</p>
    </div>
  </div>
</template>

<script>
  import types from "@/store/mutation-types";

    export default{
      name: "shop",
      created: function () {
        const shopId = this.$route.params.shopId;
        this.$http.get(this.$uahost + "/shop/" + shopId + "/auth")
          .then((curShop) => {
            this.$store.commit(types.oauth.updateCurShop, curShop);
            this.$store.commit(types.oauth.updateRole, "USER");

            const curUser = this.$store.getters[types.oauth.getCurUser];
            if (curUser !== null){
                const mobile = curUser.mobile;
                console.log("当前用户手机号码: " + mobile);
                if(mobile === null || mobile === "") {
                  this.$router.replace("/bind/mobile");
                } else {
                  this.$router.replace("/home");
                }
            } else {
              this.$router.replace("/home");
            }
          });
      }
    }
</script>
