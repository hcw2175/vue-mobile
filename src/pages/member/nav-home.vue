<style lang="scss" scoped type="text/scss">
  @import "~variables";

  .header {
    @include box-shadow();

    padding: rem(25px);
    background-color: $primary;
    background-image: -webkit-linear-gradient(top, $blue-dark-2, $blue-1);
    background-image: linear-gradient(to bottom, $blue-dark-2, $blue-1);
    text-align: center;
  }
</style>

<template>
  <div>
    <app-view>
      <div class="fadeIn">
        <div class="header">
          <img src="~img/avatar.png" width="100" height="100" class="img-circle"/>

          <div class="color-white font-l margin-top">hucw</div>
        </div>

        <div class="padding align-center margin-top font-l">
          <router-link to="/devices/iwater">查看水机详情</router-link>
        </div>

        <group>
          <cell title="title" value="value"></cell>
        </group>
      </div>
    </app-view>

    <app-nav navId="home"></app-nav>
  </div>
</template>

<script>
  import App from '@/assets/scripts/app';
  import AppNav from '@/components/app-nav.vue';

  export default {
    name: 'member',
    components: { AppNav },
    /*data: function () {
      return {
        isLoading: true,
        isEmpty: true
      }
    },*/
    created: function () {
      /*const url = "http://gank.io/api/day/history";
       this.$http.get(url)
       .then(function (resp) {
       console.log(resp.data.results);
       })*/

      /*setTimeout(() => {
        this.isLoading = false;
        console.log(this.isLoading);
      }, 3000)*/
    }
  }
</script>
