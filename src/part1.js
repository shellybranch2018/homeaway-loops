//Its a start!

function myLoop(){

 for (i=100; i < 201; i++ ){
  if(i%3 === 0){
    console.log('home')
   }
  else if(i%4 === 0){
    console.log('away')
   }else {console.log(i%4)}
   
 }

}myLoop()