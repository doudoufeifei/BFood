<template>
  <div class="site">
    <my-header title="选择地址"></my-header>
    <div class="m-msg-header">
      <a class="ico-left icon-back" onclick="window.history.go(-1)"><img src="../../assets/city_type.png" alt=""></a>
    </div>
    <div class="main">
      <!-- 没有地址的时候 -->
      <div class="empty-notice" >
        <div class="notice-icon"></div>
        您还没地址哦~
      </div>
      <div class="pub-footer spline-bottom spline-top">
        <div class="theme-btn-big yellowbg" @click="addSite()">新增地址</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../Header.vue';
export default {
  data () {
    return {}
  },
  components: {
    "my-header":Header,
  },
  methods: {
    // 跳转到添加地址页面
    addSite () {
      this.$router.push('/address')
    },
  },
}
</script>
<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
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
.main
  bottom 0
  .empty-notice
    padding-top 20%
    text-align center
    line-height pxtorem(50px)
    font-size pxtorem(30px)
    .notice-icon
      width pxtorem(200px)
      height pxtorem(200px)
      border-radius 50%
      background url("./images/empty_addrlist.png") center center no-repeat
      background-size contain
      margin 0 auto
  .theme-btn-big
    width pxtorem(450px)
    height pxtorem(80px)
    text-align center
    line-height pxtorem(80px)
    font-size pxtorem(35px)
    background yellow
    margin auto
    position absolute
    left pxtorem(150px)
    bottom pxtorem(50px)
    border-radius pxtorem(30px)
</style>






