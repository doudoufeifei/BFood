<template>
  <div class="g-shop-similar clear">
    <div class="head">
      <h2>热门菜谱</h2>
    </div>
    <div class="m-slidesGrid">
      <div class="slides">
        <div class="swiper-wrapper">
          <router-link v-for="(value,index) in listData" :key="index" :to="'menu/recommend/'+value.id" class="swiper-slide">
            <img :src="value.pic" alt="banner">
            <h3 class="am-text-truncate">{{value.title}}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  data(){
    return {
      listData: [],
    }
  },
  methods:{
    fetchData(){
      var _this = this;
      this.$http.get('/static/Recommend.json').then(function(res){
        _this.listData = res.data;
        if (_this.listData.length == 0) {
          _this.NoDataState = true;
        }
      }).catch(function(err) {
        console.log(err);
      });
    }
  },
  mounted(){
    this.fetchData(); //获取数据
  },
  updated(){
    new Swiper('.slides', {
      observer:true,
      observeParents:true,
      // slidesPerView: 3.5,
      spaceBetween: 12,
      // slidesOffsetAfter:8,
    });
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.g-shop-similar 
  clear both
  width pxtorem(750px)
  height pxtorem(310px)
  margin-top pxtorem(15px)
  background white
  // background red
  .head 
    width pxtorem(750px)
    height pxtorem(60px)
    font-size pxtorem(30px)
    line-height pxtorem(60px)
    h2
      float left
      margin-left pxtorem(20px)
  .m-slidesGrid
    overflow hidden
    width 100%
    font-size pxtorem(25px)
    width pxtorem(700px)
    margin 0 auto
    height pxtorem(250px)
    text-align center
    padding 10px
    .slides
      width pxtorem(200px)
      height pxtorem(200px)
      .swiper-wrapper
        width pxtorem(1800px)
        height pxtorem(200px)
        .swiper-slide
           position relative
           float left
        .swiper-slide:nth-child(1)
           margin-left pxtorem(-10px)
          img
            width 100%
          h3
            margin-top pxtorem(10px)
            color black           
</style>