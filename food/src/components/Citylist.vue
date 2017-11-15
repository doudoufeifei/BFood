<template>
  <div class="city_wrap">
    <my-header title="选择城市">
      <!-- strong 传递给子组件my-header的'left'-->
        <strong class="left_img" slot="left">
          <a class="ico-left icon-back" onclick="window.history.go(-1)"><img src="../assets/city_type.png" alt=""></a>      
        </strong>
    </my-header>
  	<ul>
  		<li v-for="(item,index) in cityArr" @click="backFn(index)">
  			<h2>{{item}}</h2>
  		</li>
  	</ul>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
// import Nav from './Nav.vue';
import Header from './Header.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      cityArr:['北京','上海','广州','成都','杭州','张家界','佛山','深圳','清远','苏州','郑州','长沙','东莞']
  }
},
//注册组件
  components:{
    // 'my-nav':Nav,
    "my-header":Header
  },
methods:{
  ...mapActions([
      'setCityName'
    ]),
	backFn:function(index){
		console.log(this.cityArr[index]);	
   this.setCityName(this.cityArr[index])
		//调用vuex的actions设置城市的值
		this.$store.dispatch("setCityName",this.cityArr[index]);
		// this.$store.dispatch("setCityName",e.target.firstChild.data);   //新增 获取改变城市

		//返回首页
		// console.log(this)]
		this.$router.push("/");
	}
   }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.city_wrap
  background #f2f2f2
  ul
    li
      width 100%
      height pxtorem(95px)
      font-size pxtorem(32px)
      line-height pxtorem(100px)
      padding-left pxtorem(20px)
      border-bottom pxtorem(1px) solid #c8c8c8
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
</style>
