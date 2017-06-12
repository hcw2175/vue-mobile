<template>
  <div class="valign-center">
    <div class="align-center block-center" v-html="loginHtml"></div>
  </div>
</template>

<script>
  export default{
    name: "login",
    data: function () {
      return {
          loginHtml: "系统正在授权登录，请稍候..."
      }
    },
    created: function () {
      const redirectUri = encodeURI("http://localhost:8000/home");
      window.open("http://localhost:8081/oauth/authorize?client_id=iotqqdm3z2gqbajlvko&redirect_uri=" + redirectUri, "_self");
    }
  }
</script>
