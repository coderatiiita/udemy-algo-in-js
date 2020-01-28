function matrixSpiral(n) {
    const results = [];
    for(let i=0; i<n; i++) {
        results.push([]);
    }
    
    let counter=1;
    let startColumn = 0;
    let endColoumn = n-1;
    let startRow = 0;
    let endRow = n-1;
    
    while(startColumn <= endColoumn && startRow <= endRow) {
        for(let i=startColumn; i<=endColoumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        
        for(let i=startRow; i<=endRow; i++) {
            results[i][endColoumn] = counter;
            counter++;
        }
        endColoumn--;
        
        for(let i=endColoumn; i>=startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        
        for(let i=endRow; i>=startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    } 
    
    return results;
}

console.log(matrixSpiral(3));