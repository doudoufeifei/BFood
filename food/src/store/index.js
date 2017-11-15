import Vue from 'vue';
import Vuex from 'vuex';

//引入其他的js文件
import store from './store'
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

let state={
	//题号
   fruitArr:[],
   cityList:"广州"
   //题目内容(数组嵌套json) 
}
//导出去
export default new Vuex.Store({
  state,
  store,
  getters,
  actions,
  mutations
});