console.log('-------Optional parameters--------')
function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
     
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
   } 
   disp_details(123,"John"); 
   disp_details(111,"mary","mary@xyz.com");

   console.log('-------Rest parameters--------')
   function addNumbers(...nums:number[]) {  
    var i;  
    var sum:number = 0; 
     
    for(i = 0;i<nums.length;i++) { 
    sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
   } 
   addNumbers(1,2,3) 
   addNumbers(10,10,10,10,10)

   console.log('-----Default parameters------')
   function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
   } 
   calculate_discount(1000) 
   calculate_discount(1000,0.30)

   console.log('--------anonymous function---------')
   
    var msg = function() { 
    return "hello world";  
   } 
   console.log(msg())

   console.log('--------anonymous function with parameters---------')
   var res = function(a:number,b:number) { 
    return a*b;  
   }; 
   console.log(res(12,2))
   
   console.log('------Function Constructor-----')
   var myFunction = new Function("a", "b", "return a * b"); 
   var x = myFunction(4, 3);
   console.log(x);

console.log('------ Lambda Expression -----')
var foo = (x:number)=>10 + x  
console.log(foo(100)) //outputs 110 

console.log('------ Lambda Statement -----')
var foo1 = (x:number)=> {  
    x = 10 + x  
    console.log(x)  
   } 
   foo1(100)

   console.log('------ Function Overloads  -----')
   function disp(s1:string):void; 
   function disp(n1:number,s1:string):void; 
   function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
   } 
   disp("abc") 
   disp(1,"xyz");
   
   console.log('------Define function---------')
    function a() {  
    //function definition  
    console.log("function called") 
   }

   console.log('------Calling a function---------')
   function test() { // function definition  
    console.log("function called") 
   } 
   test() // function invocation

   console.log('---------Returning a Function-----------')
   //function defined  
    function greet():string { //the function returns a string  
    return "Hello World" 
   } 
   function caller() { 
    var msg = greet() //function greet() invoked  
    console.log(msg) 
   } 
   //invoke function  
   caller()

   console.log('-----------Parameterized function-----------')
   
    function test_param(n1:number,s1:string) { 
    console.log(n1) 
    console.log(s1) 
   } 
   test_param(123,"this is a string")
   
   
   