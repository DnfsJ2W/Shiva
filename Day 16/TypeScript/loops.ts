console.log('------------while------------')
var n:number = 5 
while(n > 5) { 
 console.log("Entered while") 
} 

console.log('\n------------do while------------')
do { 
 console.log("Entered do…while") 
} 
while(n>5)

console.log('\n------------break------------')
var i:number = 1 
while(i<=10) { 
 if (i % 5 == 0) {  
 console.log ("The first multiple of 5 between 1 and 10 is : "+i) 
 break //exit the loop if the first multiple is found  
 } 
 i++ 
} //outputs 5 and exits the loop

console.log('\n------------continue------------')
var num:number = 0 
var count:number = 0; 
for(num=0;num<=20;num++) { 
 if (num % 2==0) { 
 continue 
 } 
 count++ 
} 
console.log (" The count of odd values between 0 and 20 is: "+count) //outputs 10 

//console.log('\n------------continue------------')
/* for(;;) { 
    console.log('This is an endless loop') 
   } */
   
/* while(true) { 
    console.log('This is an endless loop') 
   } */
   console.log('\n------------for loop------------')
   var num:number = 5; 
   var i:number; 
   var factorial = 1; 
   for(i = num;i>=1;i--) { 
    factorial *= i; 
   } 
   console.log(factorial)

console.log('\n------------for in------------')
var j:any; 
var n1:any = '1 2 34'
for(j in n1) { 
 console.log(n1[j])  
}

console.log('--------while loop-----------')

var num:number = 5; 
var factorial:number = 1; 
while(num >=1) { 
 factorial = factorial * num; 
 num--; 
} 
console.log("The factorial is "+factorial); 

console.log('--------do while----------')
var n:number = 10; 
do { 
 console.log(n); 
 n--; 
} while(n>=0);