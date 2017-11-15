<template>
	<!-- 导航栏 -->
  <div class="nav">
     <ul>
     	<!-- 默认渲染a标签 -->
     	<!-- 更改router-link默认渲染标签 -->
     	<!-- 属性tag='标签名' -->
     	<router-link @click.native='buttonFn(index)' v-for="(item,index) in navArr" tag='li' :key="index" v-bind:to='item.url' class="nav_click">
     		<img v-bind:src='item.src' class="img_click">
     	<span>{{item.title}}</span>
     </router-link>
     </ul> 
  </div>
</template>
<script>
export default {
  data () {
    return {
     navArr:[
     {'title':'首页', 'url':'/', src:require('../assets/footer_1.png'),url_a:require('../assets/footer_01.png')},
     {'title':'闪电超市', 'url':'CateShop', src:require('../assets/footer_3.png'),url_a:require('../assets/footer_03.png')},
     {'title':'购物车', 'url':'ShopCar', src:require('../assets/footer_4.png'),url_a:require('../assets/footer_04.png')},
     {'title':'我的', 'url':'MyPage', src:require('../assets/footer_5.png'),url_a:require('../assets/footer_05.png')}
     ]
    }
  },
    methods:{
      buttonFn:function(index){
        this.$nextTick(function(){
          var nav_click=document.querySelectorAll(".nav_click");
          var img_click=document.querySelectorAll(".img_click");
          // console.log(nav_click)
          img_click[index].src =this.navArr[index].url_a;
          nav_click[index].style.color = 'orange';
        })
      }
    }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.nav
  border-top: pxtorem(1px) solid #ccc
  position: fixed
  bottom: 0
  left: 0
  width 100%
  ul
    height pxtorem(105px)
    display flex
    list-style none
    background black
    li
      text-align center
      flex 1
      line-height pxtorem(20px)
      font-size pxtorem(27px)
      color #808080
    img
      width 32%
      height pxtorem(55px)
      display block
      margin pxtorem(10px) auto
    span
      margin-bottom 30px;  
</style>
