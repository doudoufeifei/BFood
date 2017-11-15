<template>
  <div>
    <div id="mMsgHeader" class="m-msg-header">
      <a class="ico-left icon-back" @click="routerBack"><img src="../../assets/city_type.png" alt=""></a>
    </div>
    <div class="g-banner"><img :src="communityContent.mainpic" alt=""></div>
    <div class="m-community-content">
      <div class="head">
        <img :src="communityContent.portrait" :alt="communityContent.name" class="portrait">
        <span class="name">{{communityContent.name}}</span>
      </div>
      <h2>{{communityContent.title}}</h2>
      <p class="show">{{communityContent.content}}</p>
    </div>
  </div>
</template>

<script>
export default{
  name: "menu_content",
  data(){
    return {
      communityContent: []
    }
  },
  methods: {
    routerBack(){
      this.$router.go(-1);
    },
    fetchData(){
      var _this = this;
      var contentId = this.$route.params.id;
      this.$http.get("/static/menu_list_data/"+this.$route.name+".json").then(function(res){
        var data = res.data;
        for(var i=0; i<data.length; i++){
          if(data[i].id === contentId){
             _this.communityContent = data[i];
          }
        }
      }).catch(function(err) {
        console.log(err);
        //_this.ErrorState = true;
      });
    }
  },
  mounted: function() {
    this.fetchData(); //获取数据
  }
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
.g-banner
  overflow hidden 
  width 100% 
  font-size 0
  img
    width 100%
    height pxtorem(550px)
// .g-banner.am-margin-0{margin:0rem;}
/* 社区帖子详情 */
  .m-community-content
    padding pxtorem(30px) pxtorem(30px)
    background #fff
    .head
      overflow hidden
      .portrait
        width pxtorem(60px)
        height pxtorem(60px) 
        float left 
        border-radius 50%
        img
          max-width 100%
      .name
        float left  
        line-height pxtorem(60px) 
        margin-left pxtorem(20px)
        font-size  pxtorem(28px) 
    h2
      font-size pxtorem(50px) 
      font-weight bold 
      padding pxtorem(70px) 0
  .show
    width 100%
    font-size pxtorem(35px)
    line-height pxtorem(45px)
    // 缩进首字
    text-indent pxtorem(70px)
    
</style>