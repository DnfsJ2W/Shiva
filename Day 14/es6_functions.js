//define a  function 
function test() { 
    console.log("function called") 
 } 
 //call the function 
 test()
/* ----------------------------------------------------------------------------- */
 function retStr() { 
    return "hello world!!!" 
 }  
 var val = retStr() 
 console.log(val) 

/* ----------------------------------------------------------------------------- */
 function add1(n1,n2) { 
    var sum = n1 + n2 
    console.log("The sum of the values entered "+sum) 
 } 
 add1(12,13)
/* ----------------------------------------------------------------------------- */

 function add(a, b = 1) { 
    return a+b; 
 } 
 console.log(add(4))
 /* ----------------------------------------------------------------------------- */
 function add2(a, b = 1) { 
    return a + b; 
 } 
 console.log(add2(4,2))

/* ----------------------------------------------------------------------------- */
 function addTwoNumbers(first,second = 10){
    console.log('first parameter is :',first)
    console.log('second parameter is :',second)
    return first+second;
 }

 console.log("case 1 sum:",addTwoNumbers(20)) // no value
 console.log("case 2 sum:",addTwoNumbers(2,3))
 console.log("case 3 sum:",addTwoNumbers())
 console.log("case 4 sum",addTwoNumbers(1,null))//null passed
 console.log("case 5 sum",addTwoNumbers(3,undefined))
 /* ----------------------------------------------------------------------------- */

 let DEFAULT_VAL = 30
 function addTwoNumbers1(first,second = DEFAULT_VAL){
    console.log('first parameter is :',first)
    console.log('second parameter is :',second)
    return first+second;
 }
 console.log("case 1 sum",addTwoNumbers1(1))
 console.log("case 2 sum",addTwoNumbers1(3,undefined))
/* ----------------------------------------------------------------------------- */
  function fun1(...params) { 
    console.log(params.length); 
 }  
 fun1();  
 fun1(5); 
 fun1(5, 6, 7); 

/* ----------------------------------------------------------------------------- */
/* Example − Anonymous Function */

var f = function(){ return "hello"} 
console.log(f()) 
/* ----------------------------------------------------------------------------- */
/* Example − Anonymous Parameterized Function */

var func = function(x,y){ return x*y }; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product()
/* ----------------------------------------------------------------------------- */
/* Example − Function Constructor */
/* var variablename = new Function(Arg1, Arg2..., "Function Body");  */
var func = new Function("x", "y", "return x*y;"); 
function product1() { 
   var result; 
   result = func(10,20); 
   console.log("The product value : "+result)
} 
product1()
/* ----------------------------------------------------------------------------- */
/* Example − Recursion */

function factorial(num) { 
   if(num <= 0) { 
      return 1; 
   } else { 
      return (num * factorial(num-1)  ) 
   } 
} 
console.log(factorial(5)) 

/* ----------------------------------------------------------------------------- */
/* Example − Anonymous Recursive Function */

/* (function() { 
   var msg1 = "Hello World" 
   console.log(msg1)
})() */
/* ----------------------------------------------------------------------------- */
/* ([param1, parma2,…param n] )=>statement;
Example − Lambda Expression */

var foo = (x)=>10+x 
console.log(foo(10)) 

/* ----------------------------------------------------------------------------- */
/* ( [param1, parma2,…param n] )=> {       
    //code block 
 }
 Example − Lambda Statement
*/
 var msg = ()=> { 
    console.log("function invoked") 
 } 
 msg() 

/* ----------------------------------------------------------------------------- */
/* Syntactic Variations
Optional parentheses for a single parameter. */

var msg = x=> { 
   console.log(x) 
} 
msg(10)
/* Optional braces for a single statement. Empty parentheses for no parameter. */

var disp = ()=>console.log("Hello World") 
disp();

/* ----------------------------------------------------------------------------- */
hoist_function();  
function hoist_function() { 
   console.log("foo"); 
} 

/* ----------------------------------------------------------------------------- */
var main = function() { 
    var loop = function() { 
       for(var x = 0;x<5;x++) {
          console.log(x); 
       } 
    }(); 
    // console.log("x can not be accessed outside the block scope x value is :"+x); 
 } 
 main();

/* ----------------------------------------------------------------------------- */
var main = function() { 
    (function() { 
       for(var x = 0;x<5;x++) { 
          console.log(x); 
       } 
    })(); 
    // console.log("x can not be accessed outside the block scope x value is :"+x); 
 } 
 main();

/* ----------------------------------------------------------------------------- */
// Generator Function

"use strict" 
function* rainbow() { 
   // the asterisk marks this as a generator 
   yield 'red'; 
   yield 'orange'; 
   yield 'yellow'; 
   yield 'green'; 
   yield 'blue'; 
   yield 'indigo'; 
   yield 'violet'; 
} 
for(let color of rainbow()) { 
   console.log(color); 
} 
/* ----------------------------------------------------------------------------- */
/* Generator Functions */
function* ask() { 
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('Ethan'));  
 console.log(it.next('Cricket')); 

/* ----------------------------------------------------------------------------- */
setTimeout(function(){
    console.log('Learning at TutorialsPoint is fun!! 1')
 },10000)
 /* ----------------------------------------------------------------------------- */
 /* Arrow Function Syntax
 Syntax
 //Arrow function that points to a single line of code
 ()=>some_expression
 OR
 //Arrow function that points to a block of code
 ()=> { //some statements }`
 OR
 //Arrow function with parameters
 (param1,param2)=>{//some statement} */

   const add9 = (n1, n2) => n1+n2
   console.log(add9(10, 20))

   const isEven = (n1) => {
      if(n1%2 == 0)
         return true;
      else
         return false;
   }
   console.log(isEven(10))

/* ----------------------------------------------------------------------------- */
/* Array.prototype.map() and arrow function */

const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
names.map((element,index)=> {
   console.log('inside arrow function')
   console.log('index is '+index+' element value is :'+element)
})

/* ----------------------------------------------------------------------------- */
/* window.setTimeout() and arrow function */
setTimeout(()=>{
   console.log('Learning at TutorialsPoint is fun!! 2')
},1000)

/* ----------------------------------------------------------------------------- */
//constructor function
function Student(rollno,firstName,lastName) {
   this.rollno = rollno;
   this.firstName = firstName;
   this.lastName = lastName;
   this.fullNameUsingAnonymous = function(){
      setTimeout(function(){
         //creates a new instance of this, hides outer scope of this
         /* The function doesn't use the lexical scope or the context of current execution.
          This problem can be solved by using an arrow function. */
         console.log(firstName+ " Anonymous() "+ this.lastName)
      },2000)
   }
   this.fullNameUsingArrow = function(){
      setTimeout(()=>{
         //uses this instance of outer scope
         console.log(this.firstName+ " "+this.lastName)
      },3000)
   }
}
const s1 = new Student(101,'Mohammad','Mohtashim')
s1.fullNameUsingAnonymous();
s1.fullNameUsingArrow();
