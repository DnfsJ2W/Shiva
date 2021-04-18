console.log('-------------------New String Methods startsWith----------------------------')
var str = 'hello world!!!'; 
console.log(str.startsWith('hello'));

console.log('-------------------New String Method endsWith----------------------------')
var str = 'Hello World !!! '; 
 
console.log(str.endsWith('Hello')); 
console.log(str.endsWith('Hello',5));

console.log('-------------------New String Method includes----------------------------')
var str = 'Hello World';  

console.log(str.includes('hell'))     
console.log(str.includes('Hell'));  

console.log(str.includes('or'));   
console.log(str.includes('or',1))
console.log('-------------------New String Method repeat----------------------------')
var myBook = new String("Perl"); 
console.log(myBook.repeat(2));

console.log('------------Example 1------------')
var name98 = "Brendan"; 
console.log('Hello, ${name98}!');

console.log('------------Template literals and expressions------------')
var a = 10; 
var b = 10; 
console.log(`The sum of ${a} and ${b} is  ${a+b} `);

console.log('------------Template literals and function expression------------')
function fn() { return "Hello World"; } 
console.log(`Message: ${fn()} !!`);

console.log('------------Multiline Strings and Template Literals------------')
var multiLine = `
   This is 
   a string 
   with multiple 
   lines`; 
console.log(multiLine)

console.log('---------String.raw()----------')
var text =`Hello \n World` 
console.log(text)  


var raw_text = String.raw`Hello \n World ` 
console.log(raw_text)

console.log('---------Tagged Templates----------')
function myTagFn(literals,...values){
    console.log("literal values are");
    for(let c of literals){
       console.log(c)
    }

    console.log("variable values are ");
    for(let c of values){
       console.log(c)
    }

    return "Done"
 }
 let company = `TutorialsPoint`
 let company_location = `Mumbai`
 let result = myTagFn `Hello this is ${company} from ${company_location}`

 console.log(result)

console.log('------convertToUpperTagFn------')
 function convertToUpperTagFn(literals, ...values) {
    let result = "";
    for (let i = 0; i < literals.length; i++) {
       result += literals[i];
       if (i < values.length) {
          result += values[i];
       }
    }
    return result.toUpperCase();
 }
 let company1 = `TutorialsPoint`
 let company_location1 = `Mumbai`
 let result1 = convertToUpperTagFn `Hello this is ${company1} from ${company_location1}`

 console.log(result1)
console.log('----------String.fromCodePoint()--------------')
 console.log(String.fromCodePoint(42))        
console.log(String.fromCodePoint(65, 90))