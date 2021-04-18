"use strict" 
function test() { 
   var num = 100 
   console.log("value of num in test() " + num) 
   { 
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : " + num)  
   } 
} 
test()

console.log("\nlet v/s var:")
console.log("\tvar output")
var no = 10; 
var no = 20; 
console.log("\t"+no);

console.log("\n\tlet output will throw error if variable name is used already")
let no1 = 10; 
let no2 = 20; 
console.log("\t"+no);