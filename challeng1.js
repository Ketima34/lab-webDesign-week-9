function challenge1(width,height){
    let rectangleString ='';
    for(let i = height0;i<height ;i++) {
        for(let j =width;j<width;j++){
            rectangleString +="*";

        }
        rectangleString += "\n";
    }
    return rectangleString;
}

console.log(challenge1(3,4));