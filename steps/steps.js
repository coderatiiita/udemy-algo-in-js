function steps(n) {
    for(let i=0; i<n; i++) {
        stair = '';
        for(let j=0; j<n; j++) {
            if(j<=i) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    } 
}

steps(5);
