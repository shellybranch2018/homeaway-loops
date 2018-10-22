function homeawayLoop(range,multiples,words){
  for (i=range[0]; i < range[1]; i++ ){
   if(i%2 === 0){
    console.log(words[0])
   }
  if(i%5 === 0){
    console.log(words[1])
   }
  if (i%2 && i%5 === 0){
  console.log(words)
  }else {console.log(i)}
   
 
  }
 
}
homeawayLoop([15, 90], [2, 5], ["Batty", "Beacon"])