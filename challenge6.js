const winner=(FinalVote)=>{
     let max = FinalVote[0];
     for(let i=0; i<FinalVote.length ;i++){
        if(max < FinalVote[i]){
            max = FinalVote[i];
        }
     }
     return max;
}

const countVote=(player,vote)=>{
  let finalVote=[];
  for(var x of vote){
    for(let y =0;y<player.length ;y++){
        if(x == player[y]){
           finalVote[y] +=1;
        }
    }

  }
  let Max = winner(finalVote);
  let index =0;
  for(let i =0;i<finalVote;i++ ){
      if (Max == finalVote[i] ){
          index =i;
      }
  }
  let Winner = player[index];
  return Winner;
}

let player =['A','B','C'];
let Vote =['A', 'B', 'A', 'C', 'A'];
console.log(countVote(player,Vote)+ " is the winner");