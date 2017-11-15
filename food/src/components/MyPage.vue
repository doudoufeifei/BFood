<template>
  <div class="my">
    <div v-for='item in myArr' class="bg">
      <div class="wrap">
        <img v-bind:src="item.url">
        <img v-bind:src="item.src" class="kaili">
        <p class="kai1">{{item.title}}</p>
      </div>
    </div>
   <div class="myset">
    <ul v-for='(item,index) in mysetArr'>
      <li @click='addressFn(index)'>
      	<img v-bind:src="item.url">
      	  <span>{{item.title}}</span>
      	<img v-bind:src="item.src" class="jiantou">
      </li>
    </ul>
   </div>
   <div class="myset2">
    <ul v-for='item in myset2Arr'>
      <li><img v-bind:src="item.url"><span>{{item.title}}</span><img v-bind:src="item.src" class="jiantou"></li>
    </ul>
   </div>
    <my-nav></my-nav>
  </div>
</template>
<script>
//1.引入组件
import Nav from './Nav.vue';
//点击提示框
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      myArr:[
      {url:require("../assets/bg3.png"),src:require("../assets/vip.png"),title:"豆豆",title2:"Vip会员"}
      ],
      mysetArr:[
      {url:require("../assets/img1.png"),title:"基本资料",src:require("../assets/jiantou.png")},
      {url:require("../assets/img2.png"),title:"我的订单",src:require("../assets/jiantou.png")},
      {url:require("../assets/img5.png"),title:"收货地址",src:require("../assets/jiantou.png")},
      {url:require("../assets/img3.png"),title:"我的收藏",src:require("../assets/jiantou.png")},
      {url:require("../assets/img4.png"),title:"我的钱包",src:require("../assets/jiantou.png")},    
      {url:require("../assets/img6.png"),title:"升级会员",src:require("../assets/jiantou.png")}
      ],
      myset2Arr:[
      {url:require("../assets/img7.png"),title:"更多",src:require("../assets/jiantou.png")},
      {url:require("../assets/img8.png"),title:"注册",src:require("../assets/jiantou.png")}
      ]
    }
  },
  //2.注册组件
  components:{
    'my-nav':Nav,
  },
  methods:{
  addressFn:function(index){
    console.log(index)
    switch (index) {
      case 1:this.$router.push('/shopCar'); 
        break;
      case 2:this.$router.push('/site'); 
        break;
      case 3:Toast({
                message: "已收藏",
                duration:1300
            });
        break;
      case 5:Toast({
                message: "已成为会员",
                duration:1300
            });
        break;
    }            
  }
 }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.my
  margin-bottom pxtorem(65px)
 .wrap
 	img:nth-child(1)
     margin-top 0
  .kaili
     position absolute
     top 8%
     left 40%
     border-radius 50%
   .kai1
     position absolute
     top 22.5%
     left 46%
     font-size pxtorem(33px)
     color white
.my 
  ul 
  	li
      height pxtorem(80px)
      line-height pxtorem(55px)
      margin-top pxtorem(15px)
      margin-left pxtorem(20px)
      span
         font-size pxtorem(32px)
         margin-left pxtorem(50px)
         vertical-align top

     .jiantou
        position absolute
        right pxtorem(20px)
        width 2.5%
 .myset
     margin-bottom pxtorem(10px)
     border-bottom pxtorem(20px) solid #f2f2f2
   img
     margin-top pxtorem(10px)
 .myset2
     border-bottom pxtorem(20px) solid #f2f2f2
   ul 
   	li
      height pxtorem(70px)
      margin-top pxtorem(10px)
      border-bottom pxtorem(2px) solid #f2f2f2

</style>
