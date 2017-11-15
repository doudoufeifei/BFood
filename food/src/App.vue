<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='stylus'>
@import '/assets/common/stylus/common.styl'
.mint-toast
	width pxtorem(300px)
	height pxtorem(80px)
	.mint-toast-text
		font-size pxtorem(32px)
		line-height pxtorem(62px)
</style>
