<template>
  <div class="wrap">
  	<my-header title="订单详情">
      <!-- strong 传递给子组件my-header的'left'-->
        <strong class="left_img" slot="left">
          <a class="ico-left icon-back" onclick="window.history.go(-1)"><img src="../assets/city_type.png" alt=""></a>      
        </strong>
    </my-header>
    <div class="head">
    	<ul>
    		<li>豆豆 13556538868</li>
    		<li>广东省广州市天河区新天地</li>
    	</ul>
  	</div>
    <div class="footer">
      <ul>
        <li>订单信息</li>
        <li>订单编号：SKYYJSG35854</li>
        <li>创建时间：2017-11-14</li>
      </ul>
    </div>
  	<div class="content">
  		<ul v-for="(item,index) in getShop">
  			<li><span> 购买商品</span><span>待付款</span></li>
  			<li>
  				<img :src="item.pic[0]">
					<span>{{item.name}}</span>
					<span>￥{{item.price}}</span>
  			</li>
  			<li><span>运费</span><span>￥8</span></li>
  			<li>备注:<input type="text"></li>
  		</ul>
  	</div>
  	<button class="pay" @click='paymentFn'>立即支付</button>
  </div>
</template>

<script>
import Header from './Header.vue';
//local传数据
import local from '../store/local'
//点击提示框
import { Toast } from 'mint-ui'
export default {

  data () {
    return {
      getShop:[]
    }
  },
  //注册组件
  components:{
    // 'my-nav':Nav,
    "my-header":Header
  },
  created(){
    this.getShop=local.StorageGetter("carArr")||[];
    console.log(this.getShop);
    var arr=this.getShop;
  },
  methods:{
  paymentFn:function(){
     Toast({
          message: "支付成功",
          duration:1300
      });
      this.$router.push('/MyPage') 
  }
 }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.header
  position fixed
a
  position fixed
  top pxtorem(10px)
  left pxtorem(20px)
  transform rotate(90deg)
  background rgba(102,102,102,0.6)
  width pxtorem(60px)
  height pxtorem(60px)
  line-height pxtorem(60px)
  text-align center
  border-radius 50%
  z-index 100
 .head
   height pxtorem(120px)
   font-size pxtorem(30px)
   padding-left pxtorem(30px)
   padding-top pxtorem(110px)
   border-bottom pxtorem(1px) solid gray
   ul
   	li:nth-child(2)
   		margin-top pxtorem(30px)
 .content
 	 height pxtorem(420px)
   font-size pxtorem(30px)
   padding-left pxtorem(30px)
   padding-top pxtorem(30px)
   border-bottom pxtorem(1px) solid gray
   ul
   ul:last-child
     margin-bottom pxtorem(150px)
   	li
   		margin-top pxtorem(30px)	
   	li:nth-child(1)
   		overflow hidden
   		span:nth-child(1)
   			display block
   			float left  			
   		span:nth-child(2)
   			display block
   			float right
   			margin-right pxtorem(20px)
   	li:nth-child(2)
   		border-bottom 1px solid gray
   		overflow hidden
   		img
   			width 180px
   			height 180px
   			float left
   		span
   			vertical-align top
   		span:nth-child(3)
   			display block
   			color red
   			margin-top 50px
   	li:nth-child(3)
   		overflow hidden
   		line-height 40px
   		span:nth-child(1)
   			display block
   			float left  			
   		span:nth-child(2)
   			display block
   			float right	
   			font-size pxtorem(34px)
   			margin-right pxtorem(20px)
   			color red
  .footer
   height pxtorem(220px)
   font-size pxtorem(30px)
   padding-left pxtorem(30px)
   padding-top pxtorem(30px)
   border-bottom pxtorem(1px) solid gray
   ul
   	li:nth-child(1)
   		color gray
   		margin-bottom pxtorem(30px)
   	li:nth-child(2)
   		margin-bottom pxtorem(30px)
  .pay
    background orange
    position fixed
    bottom pxtorem(30px)
    left pxtorem(200px)
    text-align center
    width pxtorem(350px)
    height pxtorem(80px)
    border-radius pxtorem(30px)
    line-height pxtorem(80px)
    font-size pxtorem(35px)
    color white 				
</style>
