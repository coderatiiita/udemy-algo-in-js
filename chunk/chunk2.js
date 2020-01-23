function chunk(array, size) {
    chunked = [];
    for (let i = 0; i < array.length; i+=size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5,6,7], 2));