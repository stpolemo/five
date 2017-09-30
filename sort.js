var arr = [1,5,8,7,2,9,8,0,3];
for(var i=0;i<arr.length;i++){
    var temp = null;
    for(var j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);