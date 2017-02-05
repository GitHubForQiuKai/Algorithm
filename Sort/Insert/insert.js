function CArray() {
    this.dataStore = [12, 3, 4, 55, 42, 6, 41, 8, 16]; //数据源
    this.insertSort = insertSort; //插入排序
}

function insertSort() {
    var temp, flag;
    for (var i = 1; i < this.dataStore.length; i++) {
        temp = this.dataStore[i];
        flag = i;
        for (var j = i - 1; j >= 0; --j) {
            if (this.dataStore[j] > temp) {
                this.dataStore[j + 1] = this.dataStore[j];
                flag = j;
            }
        }
        this.dataStore[flag] = temp;
    }
}
var cArray = new CArray();
cArray.insertSort();
console.log("排序完成", cArray.dataStore);
