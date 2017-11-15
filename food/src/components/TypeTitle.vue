<template>
  <div class="type_title">
    <div class="type">
    <ul >
     <li @click="sendFn(index)" v-for="(item,index) in type_title"><span>{{item.name}}</span></li>
     </ul>
   </div>
  </div>
</template>
<script>
// 引入公共的bus
import {bus} from '../bus/bus.js';
import {mapGetters,mapActions} from 'vuex'
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  data () {
    return {
    	 type_title:[
         {name:"全部分类"},
         {name:"肉类"},
         {name:"海鲜"},
         {name:"蔬菜"},
         {name:"进口水果"},
         {name:"国产水果"},
         {name:"油量杂货"}, 
      ],
      classLei:[]
    }
  },
  // bus.$emit('my-data', "name"),
  // 生命周期
  mounted : function() {
    this.fetchData(); //获取数据
  	// 在组件渲染完毕之后
  	// 就从后台请求数据 data
  	// this.shopsArr = data;
  },
  methods:{
    ...mapActions([
      'setItem'
    ]),
    fetchData(){
      var _this = this;
      this.$http.get('/static/food.json').then(function(res){
        _this.classLei = res.data;
        console.log(_this.classLei)
      }).catch(function(err) {
        console.log('ShopIndex',err);
      })
    },
    sendFn : function(index) {
      // 发送数据
      bus.$emit("my_type",event.currentTarget.innerText);
      var meat=[];
      for( var i=0; i<this.classLei.length;i++){
        if(this.classLei[i].id==index){
            meat.push(this.classLei[i])
        }
      }
      this.setItem(meat)
      // this.
      console.log(meat)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../assets/common/stylus/common.styl'
  .type
    width pxtorem(180px)
    height pxtorem(200px)
   ul
    li
      width pxtorem(180px)
      height pxtorem(100px)
      text-align center
      font-size pxtorem(35px)
      line-height pxtorem(45px)
      background #f4f0f0
    li:nth-child(4n+4)
      margin-right 0
</style>