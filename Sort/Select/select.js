function CArray(){
	this.dataStore = [12,3,4,55,42,6,41,8,16];//数据源
	this.swap = swap;//辅助方法：交换位置
	this.selectSort = selectSort;//选择排序
	this.showData = showData;
}
function swap(arr,index,index1){
	var temp = arr[index1];
	arr[index1] = arr[index];
	arr[index] = temp;
}
function showData(){
	return this.dataStore;
}
function selectSort(){
	var min;
	for(var i = 0;i<this.dataStore.length-1;i++){
		min = i;
		for(var j = i+1;j<this.dataStore.length;j++){
			if(this.dataStore[min]>this.dataStore[j]){
				min = j;
			}
		}
		this.swap(this.dataStore,i,min);
	}
}
var cArray = new CArray();
cArray.selectSort();
console.log(cArray.showData());