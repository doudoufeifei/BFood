<template>
  <div class="g-shop-list">
    <div class="m-shop-list">
      <ul class="clear">
        <li class="list" v-for="(value,index) in listData">
          <router-link :to="'shop/'+value.category+'/'+value.listname+'/'+value.id">
            <img :src="value.pic[0]" :alt="value.name">
            <h3 class="line-clamp-2">{{value.name}}</h3>
            <p>￥{{value.price}}</p>
            <span>月销{{value.purchased}}件</span>
          </router-link>
       </li>
     </ul>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import axios from 'axios';
export default{
  data(){
    return {
      listData: [],
    }
  },
  methods:{
    fetchData(){
      var _this = this;
      this.$http.get('/static/shuju.json').then(function(res){
        _this.listData = res.data;
        console.log(res.data)
      }).catch(function(err) {
        console.log(err)
      });
    }
  },
  mounted: function() {
    console.log(axios)
    var that=this;
    setTimeout(function(){
     that.fetchData() //获取数据
     // axios.get('./shuju.json').then(function(res){
     //  console.log(res);
     // })
    },1000);
    
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'7
 .m-shop-list
  ul
    clear both
    li
      float left
      width pxtorem(375px)
      height pxtorem(520px)
      img
        width pxtorem(375px)
        height pxtorem(375px)
      h3
        font-size pxtorem(30px)
        padding-left pxtorem(30px)
        color black
      p
        font-weight bold
        font-size pxtorem(28px)
        padding-left pxtorem(30px)
        margin-top pxtorem(30px)
        color black
      span
        float right
        padding-right pxtorem(30px)
    li:nth-child(11)
      margin-bottom 150px
</style>
