export default {
   //获取题号的方法
   getFruitArr(state){
   	// return "第"+state.SubjectItem+"道题目";
   	return state.fruitArr
    // console.log(state.fruitArr)
   },
   getShowIndexState(state){
    return state.sindex_state;
  },
  getCityList(state){
    return state.cityList;
  }
};