<template>
  <div class="foot">
    <van-tabbar v-model="active" placeholder  @change="changeTab">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的易果</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      url: ["/frist", "/list/twolist", "/cart","/center"],
      
    };
  },
   created() {
        this.active = this.url.indexOf(this.$route.path);
    },
    methods: {
        changeTab(index) {
            this.$router.push(this.url[index]);
            // console.log(index);
        },
    },
    watch: {
        $route: function(val){
            
            this.active = this.url.indexOf(val.fullPath);
        }
    }
};
</script>
<style lang="scss" scoped>
.foot{
  height: 50px;
}

</style>