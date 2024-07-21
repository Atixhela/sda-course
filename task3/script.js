var a  = [1, 3,6,4,12,14,21,34,25,44];
console.log(a);

//
var last = a.pop();
console.log(last);
console.log(a);
 
//

var c = 222;
a.push(c);
console.log(a);
//

a[1]=0;
console.log(a);

//

for(var i=0; i<a.length; i+=3){
    a[i]=1;

}
console.log(a);

