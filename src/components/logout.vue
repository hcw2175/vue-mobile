<style scoped lang="scss" type="text/scss">
</style>

<template>
<div>
  <div class="padding-m font-light">正在登出系统，请稍候...</div>
</div>
</template>

<script>

    export default{
      name: "logout",
      created: function () {
        this.$http.post(this.$basehost + "/logout")
          .then((resp) => {
            console.log("登出成功");
            console.log(resp);
            this.$router.replace("/login")
          })
      }
    }
</script>
