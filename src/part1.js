

function myLoop(){

 for (i=100; i < 201; i++ ){
  if(i%3 === 0){
    console.log('home')
   }
  if(i%4 === 0){
    console.log('away')
   }
  if (i%3 && i%4 === 0){
  console.log('HomeAway')
  }else {console.log(i)}
   
 }
  
}myLoop()
