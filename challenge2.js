function reverse( array ){
    let newArray=[];
    let count =0;
  for(let i = array.length-1 ;i >= 0;i--){
    newArray[count] = array[i];
     count++;
  }
  return newArray;
}

let arr = [1,2,4,5];
console.log(reverse(arr));