<template>
  <div id="menu">
    <keep-alive exclude="menu_content">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  computed: mapGetters([
  ]),
}
</script>
<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
         
</style>