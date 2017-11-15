<template>
  <div class="page-cart">
  	<my-header title="我的地址"></my-header>
  	<div class="m-msg-header">
      <a class="ico-left icon-back" onclick="window.history.go(-1)"><img src="../assets/city_type.png" alt=""></a>
    </div>
    <div class="main">
      <table class="receive" width="100%">
        <tr>
          <th width="28%">
            <!-- 两个英文字符等于一个中文字的宽度 -->
            收<span class="text-hidden"></span>货<span class="text-hidden"></span>人： 小飞
          </th>
        </tr>
        <tr>
          <th>
            电<span class="text-hidden"></span><span class="text-hidden"></span>话:18825253368
          </th>
        </tr>
        <tr>
          <th>收货地址:</th>广东省广州市天河区
        </tr>
      </table>
      <div class="cart-groups-wraper">
        <div class="cart-group">
        <p class='group-receive more spline-top'>
          收货时间&nbsp;&nbsp;<select class="group-receive-select">
            <optgroup label="今天">
              <option value="30分钟送达">30分钟送达</option>
              <option value="15:00-16:00">15:00-16:00</option>
              <option value="16:00-17:00">16:00-17:00</option>
              <option value="17:00-18:00">17:00-18:00</option>
              <option value="18:00-19:00">18:00-19:00</option>
            </optgroup>
            <optgroup label="明天">
              <option value="明天 09:00-10:00">明天 09:00-10:00</option>
              <option value="明天 10:00-11:00">明天 10:00-11:00</option>
              <option value="明天 11:00-12:00">明天 11:00-12:00</option>
              <option value="明天 12:00-13:00">明天 12:00-13:00</option>
            </optgroup>
            <optgroup label="后天">
              <option value="后天 09:00-10:00">后天 09:00-10:00</option>
              <option value="后天 10:00-11:00">后天 10:00-11:00</option>
              <option value="后天 11:00-12:00">后天 11:00-12:00</option>
              <option value="后天 12:00-13:00">明天 12:00-13:00</option>
            </optgroup>
          </select>
          <span class="group-receive-ext">可预订</span>
        </p>
        <div class="group-comment spline-top spline-bottom f14 pl14">
          <span class="group-comment-txt">收货备注&nbsp;&nbsp;</span>
          <div class="group-comment-input-wrap">
            <input type="text" placeholder="可输入100字以内特殊要求内容" class="group-comment-input"/>
          </div>
        </div>
        </div>
      </div>
      </div>
      <button class="hold" @click='holdFn'>保存</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from './Header.vue';
//点击提示框
import { Toast } from 'mint-ui'
export default {
  methods: {
    holdFn:function(){
    this.$router.push('/myPage'); 
    Toast({
          message: "已保存",
          duration:1300
    });           
  },
    // 跳转到地址列表页
    goToSitePage () {
      this.$router.push('/site')
    },
  
  },
  components: {
    "my-header":Header,
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.m-msg-header
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
.page-cart
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background #f2f2f2
  .receive
    font-size pxtorem(30px)
    background-image url("../assets/cart-bg.png")
    background-repeat repeat-x
    background-size auto pxtorem10px
    background-color #fff
    margin-bottom pxtorem10px
    th
      padding pxtorem(15px) pxtorem(20px) pxtorem(10px) pxtorem(30px)
      text-align left
  .cart-group
    padding-top pxtorem(20px)
    font-size pxtorem(30px)
    background-color #fff
  .group-receive
    padding-left pxtorem(30px)
    font-size pxtorem(35px)
    height pxtorem(50px)
    line-height pxtorem(50px)
  .group-receive-ext
    float right
    margin-right pxtorem(50px)
  .group-receive-select
    color #e64f1a
    outline none
    font-size pxtorem(30px)
    background-color transparent
    optgroup
      font-size pxtorem(18px)
      option
        font-size pxtorem(16px)      
  .group-comment
    height pxtorem100px
    line-height pxtorem(100px)
    display flex
    margin-left pxtorem(30px)
  .hold
    background orange
    position absolute
    top 50% 
    left pxtorem(260px)
    right 0
    bottom 0
    text-align center
    width pxtorem(200px)
    height pxtorem(80px)
    border-radius pxtorem(30px)
    line-height pxtorem(80px)
    font-size pxtorem(35px)
    color white
</style>