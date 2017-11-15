<template>
	<!-- 子组件 -->
  <div class="header">
  	<span>
   		<!-- 从父组件传递过来的标签 -->
   		<slot name="left"></slot>
  	</span>	
  	<span>{{title}}</span>
   		<!-- 从父组件传递过来的标签 -->
  	<span>
  		<slot name="right"></slot>
  	</span>
  </div>
</template>
<script>
export default {
  props:['title'],
  data () {
    return {
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
.header
  width 100% 
  background black
  height pxtorem(85px)
  font-size pxtorem(30px)
  line-height: pxtorem(80px)
  color white
  text-align center
  span:nth-child(1)
    float left
    margin-left pxtorem(20px)
  span:nth-child(3)
    float right
    margin-right pxtorem(20px)
</style>
