<template>
  <div class="wrap">
    <div id="mMsgHeader" class="m-msg-header">
      <a class="ico-left icon-back" onclick="window.history.go(-1)"><img src="../../assets/city_type.png" alt=""></a>
    </div>
    <!--头部产品滑动-->
    <div class="g-banner" id="productSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="value in shopContentShop.pic">
          <img :src="value" alt="banner">
        </div>
      </div>
    </div>
    <div class="g-shop-content">
      <!-- 产品基本参数 -->
      <div class="g-shop-head">
        <div class="m-shop-head">
          <h1>{{shopContentShop.name}}</h1>
          <p>￥{{shopContentShop.price}}<s>￥{{shopContentShop.price}}</s></p>
          <div class="note">
            <span>快递：包邮</span>
            <span>{{shopContentShop.purchased}}个人已经购买</span>
            <span>{{shopContentShop.address}}</span>
          </div>
        </div>
      </div>
     <div class="g-shop-introduce" v-html="shopContentShop.content" v-if="shopTemplate == 'content'"></div>
     <div class="g-community" v-if="shopTemplate == 'evaluate'" >
       <ul class="m-community-list">
         <li v-for="value in shopContentShop.evaluate"><a href="#">
           <div class="head">
             <img :src="value.portrait" alt="头像" class="portrait">
             <span class="name">{{value.userNanme}}</span>
           </div>
           <p>{{value.text}}</p>
           <div class="foot">
             <span class="Speak"><i class="icon-comment"></i>{{value.evaluates}}</span>
             <span class="Speak"><i class="icon-appreciate"></i>{{value.praise}}</span>
             <span class="time"><i class="icon-time"></i>{{value.time}}</span>
           </div>
         </a></li>
       </ul>
     </div>
     <div class="g-shop-list" v-if="shopTemplate == 'recommend'" >
       <div class="m-shop-list">
         <ul>
           <li v-for="(value,index) in listData"><router-link :to="'/shop/'+value.category+'/'+value.listname+'/'+value.id">
             <img :src="value.pic[0]" :alt="value.name">
             <h3 class="line-clamp-2">{{value.name}}</h3>
             <p>￥{{value.price}}</p>
             <span>月销{{value.purchased}}件</span>
           </router-link></li>
         </ul>
       </div>
     </div>
    </div>
    <!-- 购物车底部 -->
    <div id="footer" class="m-shop-footer">
      <ul>
        <li class="shopping-cart" @click="addShoppingCart"><span>加入购物车</span></li>
        <li class="purchase" @click="purchase"><span>立即购买</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import Swiper from 'swiper'
//购物车提示框
import { Toast } from 'mint-ui'
import local from '../../store/local'
export default {
  name: "shop_content",
  data(){
    return {
      shopContentShop: [],
      listData: [],
      shopTemplate: 'content',
      contentClass: true,
    }
  },
  components:{
  },
  methods: {
    addShoppingCart(){

      // alert('加入购物车,商品id：'+this.shopContentShop.id);
      // console.log(this.shopContentShop)
      var shopArr=local.StorageGetter("carArr")||[];
      // local.StorageSetter("carArr",[])
      console.log(shopArr)
      if(shopArr.length<=0){
        shopArr=[this.shopContentShop]
      }else{
        //提示框
        Toast({
                message: "已成功加入购物车",
                duration:1300
            })
        // console.log(this.shopContentShop)
        for(var i=0;i<shopArr.length;i++){
          if(this.shopContentShop.id==shopArr[i].id){
          return 
        }
        }
        
        shopArr.push(this.shopContentShop)
      }
      local.StorageSetter("carArr",shopArr)
    },
    // 购买商品
    purchase(){
      // alert('立即购买，商品id：'+this.shopContentShop.id+'，商品价格：'+this.shopContentShop.price);
      this.$router.push('/payment');
    },
    fetchData(){
      if (!this.$route.params.listname) { return false; }
      var _this = this;
      var contentId = this.$route.params.contentId;
      this.$http.get('/static/shop_list_data/'+this.$route.params.listname+'.json').then(function(res){
        for(var i=0; i<res.data.length; i++){
          if(res.data[i].id === contentId){
             _this.shopContentShop = res.data[i];
             console.log(res.data[i])
          }
        };
        if (_this.shopContentShop.length === 0) {
        }
      }).catch(function(err) {
      });
      this.$http.get('/static/shop_recommend.json').then(function(res){
        _this.listData = res.data;
      }).catch(function(err) {

      });
    }
  },
  mounted() {
    this.fetchData(); //获取数据
    //头部产品主图滑动
    new Swiper('#productSwiper', {
      initialSlide:0,
      observer:true,
      observeParents:true,
    });
  }
}

</script>
<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.wrap
  background #f0efef
 .m-msg-header
   a
    position fixed
    top pxtorem(10px)
    left pxtorem(20px)
    transform rotate(90deg)
    background rgba(102,102,102,0.4)
    width pxtorem(60px)
    height pxtorem(60px)
    line-height pxtorem(60px)
    text-align center
    border-radius 50%
    z-index 200
.g-banner
    overflow hidden
    width 100%
    font-size 0
 .swiper-wrapper
    width pxtorem(2250px)
    height pxtorem(750px)   
    .swiper-slide
      float left
      position relative
      img
        width 100%
  .g-shop-head
    margin-top pxtorem(15px)
    background #fff
    padding pxtorem(20px)
    margin-bottom pxtorem(5px)
    h1
      font-size pxtorem(32px)
      margin-bottom pxtorem(30px)
    p
      font-size pxtorem(40px) 
      font-weight bold
      margin-bottom pxtorem(30px)      
      s
        font-size pxtorem(30px)
        margin-left pxtorem(20px)
        color #666
    .note
      display flex
    .note>span
      flex 1 
      font-size pxtorem(27px )
      color #666
    .note>span:nth-child(2)
      text-align center
    .note>span:nth-child(3)
      text-align right
/* 商品购买页面底部 */
#footer:after
  content '' 
  display block 
  height pxtorem(100px)
#footer 
    ul
      display flex 
      align-items center  
      height pxtorem(100px)
      padding pxtorem(30px)
      background #292929 
      position fixed 
      bottom 0
      width 100% 
      z-index 999
      li
        flex 1 
        text-align center
.m-shop-footer
    ul
      padding 0 !important 
      z-index 10 !important
      li
        cursor pointer
      .shopping-cart
        background #292929 
        color #ffb422
        span
          font-size pxtorem(35px) 
          line-height pxtorem(100px)
      .purchase
        background #ffb422 
        color:#292929
        span
          font-size pxtorem(35px)
          line-height pxtorem(100px)   
</style>