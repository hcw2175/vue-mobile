<style lang="scss" scoped type="text/scss">
  @import "~variables";

  .header {
    @extend %valign-center;
  }
</style>

<template>
  <div>
    <app-view>
      <div class="fadeIn">
        <div class="header">
          <img src="~img/banner.jpg" class="banner"/>
          <!--<img src="~img/avatar.png" width="100" height="100" class="img-circle" v-if="curUser.avatar === ''"/>
          <img :src="curUser.avatar" width="100" height="100" class="img-circle" v-if="curUser.avatar !== ''"/>

          <div class="color-white font-l margin-top">{{curUser.nickname}}</div>-->
        </div>

        <div class="padding align-center margin-top font-l">
          <p><router-link to="/devices/iwater">查看水机详情</router-link></p>
          <p><router-link to="/logout">登出系统</router-link></p>
        </div>
      </div>
    </app-view>

    <app-nav navId="home"></app-nav>
  </div>
</template>

<script>
  import App from '@/assets/scripts/app';
  import AppNav from '@/components/layouts/app-nav.vue';
  import MutationTypes from "@/store/mutation-types";

  export default {
    name: 'member',
    data: function(){
        return {
            curUser: this.$store.getters[MutationTypes.oauth.getCurUser]
        }
    },
    components: { AppNav },
    created: function () {
      /*this.$store.commit("showEmptyView");

      setTimeout(() => {
        this.$store.commit("hideEmptyView");
      }, 2000)*/
    }
  }
</script>
