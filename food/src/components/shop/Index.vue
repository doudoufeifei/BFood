<template>
  <div>
    <div class="g-header-seat" v-show=getShowIndexState>
      <div id="header" class="m-default-hader">
      </div>
    </div>
    <div class="g-shop-class" v-bind:class="{'IndexActive':getShowIndexState}">
      <keep-alive exclude="shop_content">
        <router-view :categoryData='shop_category'></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  data(){
    return {
      shop_category: []
    }
  },
  components: {
  },
  computed: mapGetters([
    'getShowIndexState'
  ]),
  mounted: function() {
    this.fetchData(); //获取数据
  },
  methods: {
    fetchData(){
      var _this = this;
      this.$http.get('/static/shop_category.json').then(function(res){
        _this.shop_category = res.data;
      }).catch(function(err) {
        console.log('ShopIndex',err);
      })
    }
  }
}
</script>
