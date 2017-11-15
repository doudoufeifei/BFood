const localEvent = {
	//获取
  StorageGetter: function (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  //设置
  StorageSetter: function (key, val) {
    return localStorage.setItem(key, JSON.stringify(val))
  }
}

export default localEvent