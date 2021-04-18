/* var num = 5
var factorial=1;
for( let i = num ; i >= 1; i-- ) {
   factorial *= i ;
}
console.log(factorial);

var obj = {a:1, b:2, c:3};

for (var prop in obj) {
   console.log(obj[prop]);
}

for (let val of[12 , 13 , 123]){
    console.log(val)
 } 

 var num = 5;
var factorial = 1;
while(num >=1) {
   factorial = factorial * num;
   num--;
}
console.log("The factorial is "+factorial);

var n = 10;
do {
   console.log(n);
   n--;
} while(n >= 0);

var i = 1
while(i<= 10) {
   if (i % 5 == 0) {
      console.log("The first multiple of 5 between 1 and 10 is : "+i)
      break //exit the loop if the first multiple is found
   }
   i++
}
*/
var num = 0
var count = 0;
for(num = 0;num<= 20;num++) {
   if (num % 2 == 0) {
      continue
   }
   count++
}
console.log(" The count of odd values between 0 and 20 is: "+count)