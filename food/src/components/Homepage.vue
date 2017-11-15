<template>
    <div class="wrap">
    <my-header title="美食之都">
      <!-- strong 传递给子组件my-header的'left'-->
        <strong class="left_img" slot="left">
         <router-link class="city" to="citylist"><span class="city">{{city}}</span><img src="../assets/city_type.png" height="18" width="31"></router-link>
          
        </strong>
        <!-- strong 传递给子组件my-header的'right'-->
        <strong class="right_img" slot="right">
          <img   src="../assets/sousuo.png" height="32" width="40">
          </strong>
    </my-header>
    <div class="swiper">
           <!-- 03.引入布局组件 -->
   <mt-swipe :auto="4000">
    <mt-swipe-item><img src="../assets/food_one.png" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/food_two.png" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/food_three.png" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/food_four.png" alt=""></mt-swipe-item>
   </mt-swipe>
  </div>
  <my-menu></my-menu>
  <my-shop></my-shop>
  <my-nav></my-nav>
  </div>
  
</template>

<script>
//00.引入Vue对象
import Vue from 'vue';
//01.引入mint-ui组件
//js引入
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//02.引入mint-ui  的css
import 'mint-ui/lib/style.css'
//引入axios模块
import axios from 'axios'; 
//1.引入组件
import Header from './Header.vue';
import Nav from './Nav.vue';
import MenuSwiper from './MenuSwiper.vue';
import ShopList from './ShopList.vue'
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
       // city:'广州'
       //-----------增加的----------
       //从vuex中获取state的数据
       // city:this.$store.state.city
       //-----------增加的----------
changeArr:[]
    }
  },
  computed:{
     city:function(){
     	 // return this.$store.state.city       //这行没有getters是的获取

      //通过vuex的getters方法来获取state里面的数据   //下面一行是增加getters的写法
      return this.$store.getters.getCityFn;

     }
  },
  computed:mapGetters({
    city :'getCityList'
  }),
   //-----------增加的----------
  methods:{
    //请求数据(后台)
    //请求的是模拟的假数据
    ajaxFn:function(){
     var  that=this
      //使用axios来请求数据
      axios.get("/student").then(function(res){
        console.log(res);
         that.changeArr=res.data.student
      });
    },
      fn:function(){
      	//直接更改vuex中的state的数据
      	// this.$store.state.city="广州"
  //------------------新----------
        //通过vuex的actions方法来设置state里面数据
        //(内容actions调用了mutations的方法)
         this.$store.dispatch("setCityName","张家界");
  //------------------新----------
      	// console.log(this.$store.state.city);
      }

  	},     
  created:function(){
  	//获取vuex中城市这个数据
  	//this.$store获取的vuex的对象
  	console.log(this.$store);
    // console.log(this.$store.state.city);

  },
  //注册组件
  components:{
    'my-nav':Nav,
    "my-header":Header,
    "my-menu":MenuSwiper,
    "my-shop":ShopList
  }

}
</script>


<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.wrap
  background #e3e0e0
  .header
    position fixed
    top 0
    left 0
    z-index 10
  .swiper
    margin-top pxtorem(85px)
    img
      width 100%
  .mint-swipe
    height pxtorem(400px)
    width 100%
  .left_img
    img
     width pxtorem(36px)
     height pxtorem(20px) 
 .right_img
    img
     width pxtorem(60px)
     height pxtorem(38px)
     padding-top pxtorem(19px)
  .city
    color white
    font-weight bold
    padding-right pxtorem(5px)
</style>
