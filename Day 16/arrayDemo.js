/* ------------------------------------------------------------------------------- */
/* Example: Simple Array */

var alphas; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);
/* ------------------------------------------------------------------------------- */
var nums = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

/* ------------------------------------------------------------------------------- */
/* Array Object */
var arr_names = new Array(4)  
for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}
/* ------------------------------------------------------------------------------- */
/* Example: Array Constructor Accepts Comma-separated Values */
var names = new Array("Mary","Tom","Jack","Jill") 
for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}
/* ------------------------------------------------------------------------------- */
/* Concat */
var alpha = ["a", "b", "c"]; 
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); 
console.log("alphaNumeric : " + alphaNumeric ); 
/* ------------------------------------------------------------------------------- */
/* Two-dimensional Array */
var multi = [[1,2,3],[23,24,25]]  
console.log(multi[0][0]) 
console.log(multi[0][1]) 
console.log(multi[0][2]) 
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2])  

/* ------------------------------------------------------------------------------- */
/* Passing Arrays to Functions */
var names = new Array("Mary","Tom","Jack","Jill") 
function disp(arr_names) {    
   for(var i = 0;i<arr_names.length;i++) {            
      console.log(names[i]) 
   } 
} 
disp(names)  
/* ------------------------------------------------------------------------------- */
/* Function Returning an Array */
function disp1() { 
    return new Array("Shiva","Tom","Jack","Jill") 
 } 
 var nums = disp1() 
 for(var i in nums) { 
    console.log(nums[i])   
 } 
 /* ------------------------------------------------------------------------------- */
 /* Array Method filter() */
 /* array.filter(callback[, thisObject]);  */

 function isBigEnough(element) { 
    return (element >= 10); 
 } 
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );  
 /* ------------------------------------------------------------------------------- */
 /* Array Method forEach() */
/*  array.forEach(callback[, thisObject]);

 Example: forEach() */
 console.log("------------\nArray ForEach") 
var nums = new Array(12,13,14,15,1,2,4)  
console.log("Printing original array......")  

nums.forEach(function(a,i) { 
   console.log(a) 
})  
nums.reverse()  //reverses the array element 
console.log("Printing Reversed array....")  

nums.forEach(function(val,index){ 
   console.log(val) 
})  
/* ----------------------------------------------------------------------- */
/* Array Method forEach() */
var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index )  
/* ----------------------------------------------------------------------- */
/* Array Method map() */
/* array.map(callback[, thisObject]);   
Parameters
callback − Function that produces an element of the new Array from an element of the current one.

thisObject − Object to use as this when executing callback. */
var numbers = [1, 4, 9]; 
var roots = numbers.map(function(a) { 
   console.log("------------Map function called------------") 
   var b = a *10;
   return b;
}); 
console.log("roots is : " + roots );
/* ----------------------------------------------------------------------- */
/* Array Method pop() */
console.log("---------------------------")
console.log("Array Method pop()")
console.log("---------------------------")
var numbers = [1, 4, 9]; 
var element = numbers.pop(); 
console.log("element is : " + element );  

var element = numbers.pop(); 
console.log("element is : " + element );    
console.log(numbers)
/* ----------------------------------------------------------------------- */
/* Array Method push() */
var numbers = new Array(1, 4, 9);
var length = numbers.push(10); 
console.log("new numbers is : " + numbers );  
length = numbers.push(20); 
console.log("new numbers is : " + length );
/* ----------------------------------------------------------------------- */
/* Array Method reduce() */
/* array.reduce(callback[, initialValue]);   
Parameter Details
callback − Function to execute on each value in the array.
initialValue − Object to use as the first argument to the first call of the callback.
 */

var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );  
/* ----------------------------------------------------------------------- */
/* Array Method slice() */
var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("arr.slice( 1, 2) : " + arr.slice( 1, 3) );
console.log("arr.slice( 1, 3) : " + arr.slice( -3, -1) ); 

/* ----------------------------------------------------------------------- */
/* Array Method shift() */
var ar = new Array(10, 1, 2, 3);
var arr = ar.shift(); 
console.log("Shifted value is : " + arr )   
console.log("Array: " + ar)
/* ----------------------------------------------------------------------- */
/* Array De-structuring */
console.log("--------------Array De-structuring----------------------")
var names = ['Mohtashim','Kannan','Kiran']
   let [n1,n2,n3] = names;
   console.log(n1)
   console.log(n2)
   console.log(n3);
   //rest operator with array destructuring
   let locations=['Mumbai','Hyderabad','Chennai']
   let [l1,...otherValues] =locations
   console.log(l1)
   setTimeout(function(){
      console.log('Time out for other values')
   },5000)
   console.log(otherValues)
   //variables already declared
   let name1,name2;
   [name1,name2] =names
   console.log(name1)
   console.log(name2)
   //swapping
   let first=10,second=20;
   [second,first] = [first,second]
   console.log("second is ",second) //10
   console.log("first is ",first) //20
/* ---------------------------------------------------------------------------- */
console.log("------------------Array Method splice()-----------------------")
var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 

removed = arr.splice(3, 1);  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed);   
/* ---------------------------------------------------------------------------- */
console.log("------------------Array.prototype.find-----------------------")
var numbers = [2,4,8,7 , 9, 3, 12,16]; 
/* var oddNumber = numbers.find((x) => x % 2 == 1);  */
var oddNumber = numbers.find(function(a) { 
   var b = a % 2;
   if(b==1)
   return true;
}); 
console.log(oddNumber); 
/* ---------------------------------------------------------------------------- */
console.log("------------------Array.prototype.findIndex-----------------------")
var numbers = [1, 2, 3]; 
var oddNumber = numbers.findIndex((x) => x % 2 == 1); 
console.log(oddNumber);
/* ---------------------------------------------------------------------------- */
console.log("------------------Array.prototype.entries-----------------------")
var numbers = [10, 24, 35]; 
var val = numbers.entries(); 
console.log(val.next().value);  
console.log(val.next().value);  
console.log(val.next().value);
console.log("------Spread Operator--------")
var numbers1 = [1, 2, 3]; 
var val1= numbers1.entries(); 
console.log([...val1]);
/* ---------------------------------------------------------------------------- */
console.log("------------------Array.from-----------------------")
"use strict" 
for (let i of Array.from('hello')) { 
   console.log(i) 
}
/* ---------------------------------------------------------------------------- */
console.log("------------------Array.prototype.keys()-----------------------")
console.log(Array.from(['a', 'b'].keys()))
/* ---------------------------------------------------------------------------- */
console.log("------------------Array Traversal-----------------------")
/* Array Traversal using for…in loop
One can use the for… in loop to traverse through an array. */

"use strict" 
var nums = [1001,1002,1003,1004] 
for(let j in nums) { 
   console.log(nums[j]) 
}