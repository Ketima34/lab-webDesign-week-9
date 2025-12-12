const countWord=(text)=>{
    let count=1;
    for(var x of text){
        if(x == " "){
            count++;
        }
    }
    return count;
}

let Text = "hello world";
console.log(countWord(Text));