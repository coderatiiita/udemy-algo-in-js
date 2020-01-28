function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        minIndex = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[minIndex]) {
                minIndex=j;
            }
        }
        if(minIndex!=i) {
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([55,23,14,63,21,11]));
console.log(selectionSort([-30,10,0,5,97,11]));