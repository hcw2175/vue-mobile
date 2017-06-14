<template>
  <div class="full-height valign-center">
    <div class="align-center block-center font-light">
      <div class="inline-block">
        <mt-spinner type="double-bounce" color="#bbbec4" :size="28"></mt-spinner>
      </div>
      <p class="margin-top">系统正在授权登录，请稍候...</p>
    </div>
  </div>
</template>

<script>
  import App from '@/assets/scripts/app';

  export default{
    name: "login",
    created: function () {
      const redirect = this.$route.query.redirect;
      if (App.isDev) {
        const redirectUri = encodeURI("http://localhost:8000/access/token?redirect=" + redirect);
        window.open("http://localhost:8081/oauth/authorize?client_id=iotqqdm3z2gqbajlvko&redirect_uri=" + redirectUri, "_self");
      } else if (App.isStage) {
        const redirectUri = encodeURI("http://test.xohaa.net/access/token?redirect=" + redirect);
        window.open(this.$basehost + "/oauth/authorize?client_id=iotqqdm3z2gqbajlvko&redirect_uri=" + redirectUri, "_self");
      } else {
        const redirectUri = encodeURI("http://m.xohaa.net/access/token?redirect=" + redirect);
        window.open(this.$basehost + "/oauth/authorize?client_id=iotqqdm3z2gqbajlvko&redirect_uri=" + redirectUri, "_self");
      }
    }
  }
</script>
