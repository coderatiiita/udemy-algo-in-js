function bubbleSort(arr) {
    flag=true;
    for(let i=0; i<arr.length && flag; i++) {
        flag=false;
        for(let j=0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                flag=true;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([55,23,14,63,21,11]));
console.log(bubbleSort([-30,10,0,5,97,11]));