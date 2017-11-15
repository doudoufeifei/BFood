const SUB_ITEM="SUB_ITEM";
export default {
	//这个函数名是"SUB_ITEM"
	//更改题号
	[SUB_ITEM] (state,data){
		state.fruitArr=data;
		// console.log(data)
	},
	setCity(state,name){
    		state.cityList=name;
    		// console.log(name)
    	}
};