
    for ( var i = 10; i <= 20; i++ ) {
   console.log(i);
  }

  var j=10;
  while(j<=20){
    console.log(j);
    j++;
  }

  var k=10;
  do{
    console.log(k);
    k++;

  }while(k<=20);


  for ( var i = 10; i <= 20; i+=2 ) {
    console.log(i);
   }

   function numbers(a,b){

for ( var i = a; i <= b; i+=2 ) {
    console.log(i);


   }
   
   }
   function numbers(a,b){
    console.log("function called");
    if(a<b){
     for ( var i = a; i <= b; i+=2 ) {
        console.log(i);
    
       }

    }else{
        console.log("Warning:A is greater than B")
    }
      
       }
    numbers(10,20);