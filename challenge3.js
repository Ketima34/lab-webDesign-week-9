const Avg=(array)=>{
    let avg =0;
    for(var i of array){
        avg += i;
    }
    avg /= array.length ;
    return avg;
}

let arr = [2,2,2,2,2];
console.log(Avg(arr));