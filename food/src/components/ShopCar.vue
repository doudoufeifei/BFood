<template>
  <div class="shop">
    <my-header title="购物车"></my-header>
      <div class="shopcar">
        <ul v-for="(item,index) in getShop">      
          <li><img :src="igbol[index]==false?url[0]:url[1]" @click="clickFn(index)" alt="" class="check"><img :src="item.pic[0]">
            <span>{{item.name}}</span>
            <span class="del" @click="delFn(index)">删除</span>
            <span>￥{{item.price}}</span>
            <span class="min" @click="reduceCartNum(index)">-</span>
            <input type="text" class="goods_num" readonly v-model.number="item.buy_num">
            <span class="max" @click="addCartNum(index)">+</span>
          </li>
        </ul>
      </div>
      <div class="car-foot">
        <div class="left" @click="AllFn">
          <img src="../assets/checkbox.png" alt="" v-show="!Allbol">
          <img src="../assets/checkbox-selectd.png" alt="" v-show="Allbol">
          <span>全选</span>
        </div>
        <div class="center">
          <span class="sum-price">总额￥{{moneyFn.toFixed(2)}}</span>
        </div> 
          <button class="to-pay" @click='paymentFn'>结算</button>
      </div>
    <my-nav></my-nav>
  </div>
</template>

<script>

//1.引入组件
import Nav from './Nav.vue';
import Header from './Header.vue';
import local from '../store/local'
//点击提示框
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      Allbol:false,
      buy_num:0,
      getShop:[],
      url:[require("../assets/checkbox.png"),require("../assets/checkbox-selectd.png")],
      igbol:[]
    }
  },
  created(){
    this.getShop=local.StorageGetter("carArr")||[];
    console.log(this.getShop);
    var arr=this.getShop;
    for(var i=0;i<arr.length;i++){
      this.igbol.push(false);
    }
    console.log(arr)
  },
  //2.注册组件
  components:{
    'my-nav':Nav,
    // HeadTitle,
    "my-header":Header,
  },
  //计算金额的
  computed:{
    moneyFn:function(){
        var allp=0;
        for (var i=0;i<this.getShop.length;i++) {
          if(this.igbol[i]){
             allp=allp+this.getShop[i].price*this.getShop[i].buy_num;
          }       
        }
        return allp;
    }
  },
  methods:{
     delFn: function (index) {
      if (confirm("你确定移除该商品？")) {  
         this.getShop.splice(index,1);
         local.StorageSetter("carArr",this.getShop)
       }       
     },
    addCartNum:function (index) {
                     var buy_nums=Number(this.getShop[index].buy_num)
                     if(buy_nums>100){                             
                         return false;
                      }                      
                     this.getShop[index].buy_num++;
                     // console.log(this.getShop)
                  },
                  reduceCartNum:function(index){
                       var buy_nums=this.getShop[index].buy_num
                       if(buy_nums <= 0){                                                          
                           return false;
                          }
                    this.getShop[index].buy_num--;
                    console.log(this.getShop)
                  },
                    
    clickFn:function(index){
      var bol = !this.igbol[index];
      this.$set(this.igbol, index, bol)
    },
    AllFn:function(){
      this.Allbol=!this.Allbol
      console.log(this.Allbol)
      var arr=this.igbol
      if(this.Allbol){
        for(var i=0;i<arr.length;i++){
          if(arr[i]==false){
            arr[i]=!arr[i]
            this.igbol=arr
          }
        }
      }else{
        for(var i=0;i<arr.length;i++){
         if(arr[i]==true){
           arr[i]=!arr;
         }
        }
        this.igbol=arr;
      }
    },
    paymentFn:function(){
     Toast({
          message: "结算成功",
          duration:1300
      });
      // this.$router.push('/MyPage') 
  }
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
  .shopcar
    ul
      .check
        float left
        width pxtorem(50px)
        height pxtorem(50px)
        margin-top pxtorem(50px)
        margin-left 10px
      li
        overflow hidden
        height pxtorem(150px)
        border-bottom pxtorem(1px) solid gray
        img
          width pxtorem(180px)
          height pxtorem(180px)
          float left
        span:nth-child(3)
          display block
          font-size pxtorem(31px)
          // font-weight bold
          margin-top pxtorem(10px)
        span:nth-child(4)
          display block
          font-size pxtorem(28px)
          text-align right
          margin-right pxtorem(30px)
          font-size 31px
          margin-top pxtorem(10px)
          color black
          line-height pxtorem(40px)
        span:nth-child(5)
          color red
          display inline-block
          // vertical-align top
          line-height pxtorem(65px)
          font-size pxtorem(28px)
        .min
          display inline-block
          width pxtorem(50px)
          height pxtorem(50px)
          margin-left pxtorem(150px)
          margin-right pxtorem(15px)
          text-align center
          font-size pxtorem(40px)
          border-radius 50%
          background orange
        .goods_num
          width pxtorem(50px)
          font-size pxtorem(40px)
        .max
          display inline-block
          width pxtorem(50px)
          height pxtorem(50px)
          text-align center
          font-size pxtorem(40px)
          margin-left 0
          border-radius 50%
          background orange
    ul:last-child
      margin-bottom pxtorem(240px)      
  .car-foot
    position fixed
    left 0
    bottom pxtorem(100px)
    width 100%
    height pxtorem(120px)
    background #fbf8f8
    overflow hidden
    .left
      float left
      width pxtorem(150px)
      margin-left pxtorem(20px)
      margin-top pxtorem(35px)
      font-size pxtorem(30px)
      img
        float left
        width pxtorem(50px)
        height pxtorem(50px)
      span
        line-height pxtorem(50px)
        margin-left pxtorem(15px)
    .center
      float left
      font-size pxtorem(30px)
      color red
      line-height pxtorem(120px)
      margin-left pxtorem(40px)  
    .to-pay
      margin-top pxtorem(20px)
      margin-right pxtorem(20px)
      border-radius pxtorem(20px)
      width pxtorem(250px)
      height pxtorem(80px)
      font-size pxtorem(35px)
      background orange
      float right
                
</style>