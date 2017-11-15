<template>
	<div>
    <my-header title="艾玛超市"></my-header>
    <div class="type_wrap">
      <ul v-for="item in typeArr" >    
        <li class="life" @click='selectFn'>{{item.type}}</li>
      </ul>
     </div>
  <type-title v-show="bol"></type-title>
  <div class="productList" >
    <div class="product-filter">
    <div class="g-shop-class">
      <router-link :to="'shop/0/01/1494153625921'">
      <ul class="menu" v-for="item in fruit==''?shop_category:fruit" >
        <li><img :src="item.pic" :alt="item.name">
        <p>{{item.name}}</p>
        </li>
      </ul>
    </router-link>
    </div>
  </div>
 </div>
  <my-nav></my-nav>
   </div>
</template>
<script>
import Header from './Header.vue';
import Nav from './Nav.vue';
import TypeTitle from './TypeTitle.vue'
import {bus} from '../bus/bus.js';
import {mapGetters,mapActions} from 'vuex'
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  data () {
    return {
      shop_category: [],
        typeArr:[
         {type:"功能菜单"}
      ],
      bol:false,
      shop_Arr:[]
    }
  },
  //2.注册组件
  components:{
    'my-nav':Nav,
    "my-header":Header,
    TypeTitle
  },
  computed: mapGetters({
    fruit:'getFruitArr'

  }),
  created(){
    // this.shop_category=this.fruit
  },
  methods:{
    fetchData(){
      var _this = this;
      this.$http.get('/static/food.json').then(function(res){
        _this.shop_category = res.data;
        console.log(_this.shop_category)
      }).catch(function(err) {
        console.log('ShopIndex',err);
      });
      //跳转详情页面
      this.$http.get('/static/shop_list_data/01.json').then(function(res){
        _this.shop_Arr = res.data;
        console.log(_this.shop_Arr)
      }).catch(function(err) {
        console.log('ShopIndex',err);
      })
    },
      selectFn :function(){
        var life=document.querySelectorAll(".life")[0];
        this.bol=!this.bol
        // console.log(this.bol)
        if (this.bol==false) {
          life.style.color="#666666"
        }
        if (this.bol==false) {
          life.style.color="orange"
        }
      },
    },
  // 生命周期
  mounted : function() {
    this.fetchData(); //获取数据
    var that = this;//当前组件  
    bus.$on('my_type',function(data) {
      // this 指的是bus
      that.typeArr[0].type = data;
    })
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.type_wrap
  width pxtorem(180px)
  height pxtorem(100px)
  text-align center
  line-height pxtorem(90px)
  background #f4f0f0 
  font-size pxtorem(35px)
.productList
  position absolute
  right 0
  top pxtorem(100px)
  bottom 0
  width 76%
  z-index -10
  .product-filter
    display flex
    flex-direction column
    position absolute
    z-index 2
    width 100%
    .filter-titles
      height pxtorem(50px)
      padding 10px 0
      background-color rgba(255,255,255,0.8)
      width 100%
      border-bottom pxtorem(1px) solid #e1dbdd
      div
        float left
        width 50%
        height pxtorem(50px)
        line-height pxtorem(31px)
        text-align center
        font-size pxtorem(31px)
      div:nth-child(1)
        box-sizing border-box
        border-right pxtorem(1px) solid #d5d5d5
  .menu
      li
        float left
        img
          width pxtorem(160px)
          margin-left (20px)
        p
          text-align center
          font-size pxtorem(30px)
</style>
