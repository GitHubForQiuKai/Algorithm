function CArray(){
	this.dataStore = [12,3,4,55,42,6,41,8,16];//数据源
	this.swap = swap;//辅助方法：交换位置
	this.bubbleSort = bubbleSort;//冒泡排序
	this.showData = showData;
}
function swap(arr,index,index1){
	var temp = arr[index1];
	arr[index1] = arr[index];
	arr[index] = temp;
}
function showData(){
	return this.dataStore
}
function bubbleSort(){
	for(var i = this.dataStore.length;i>1;--i){
		for(var j=0;j<i;j++){
			if(this.dataStore[j]>this.dataStore[j+1]){
				this.swap(this.dataStore,j,j+1);
			}
		}
	}
}
var cArray = new CArray();
cArray.bubbleSort();
console.log(cArray.showData());