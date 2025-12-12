const countChar =( text,target )=> {
    let count=0;
    for(var x of text){
         if(x == target){
            count++;
         }
    }
    return count;
}

let Text= "hello world";
let Target ='o';
console.log(countChar(Text,Target));