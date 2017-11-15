export default {
    //添加更改题号
    setItem({commit,state},data){
    	//直接调mutations的方法
    	commit('SUB_ITEM',data);
    	// console.log(data)
    },
    setCityName({commit,state},name){
           //跟后台打交道
           //调用mutations里面的方法
           commit("setCity",name);
           // console.log(name)
    	}
};