/* ------------------------------------------------------------------------ */
/* Object Initializers */
var person = { 
    firstname:"Tom", 
    lastname:"Hanks", 
    func:function(){return "Hello!!"},    
 }; 
 //access the object values 
 console.log(person.firstname)   
 console.log(person.lastname) 
 console.log(person.func())
 /* ------------------------------------------------------------------------ */
 /* In ES6, assigning a property value that matches a property name, 
 you can omit the property value. */
 var foo = 'bar' 
 var baz = { foo } 
 console.log(baz.foo)

 /* ------------------------------------------------------------------------ */
 /* Following is the ES5 equivalent of the above code. */

 var foo = 'bar' 
 var baz = { foo:foo } 
 console.log(baz.foo)
 
 /* ------------------------------------------------------------------------ */
 /* The Object() Constructor */

 /* Following is the syntax for defining an object.

 var obj_name = new Object(); 
 obj_name.property = value;    
 OR             
 obj_name["key"] = value 
 Following is the syntax for accessing a property.
 
 Object_name.property_key                    
 OR              
 Object_name["property_key"] */

/*  Example */
 var myCar = new Object(); 
 myCar.make = "Ford"; //define an object 
 myCar.model = "Mustang"; 
 myCar.year = 1987;  
 
 console.log(myCar["make"]) //access the object property 
 console.log(myCar["model"]) 
 console.log(myCar["year"])
 
 console.log(myCar.make) //access the object property 
 
 /* ------------------------------------------------------------------------ */
var myCar = new Object(); 
myCar.make = "Ford"; 
console.log(myCar["model"])
 
 /* ------------------------------------------------------------------------ */
/*  Properties can also be accessed by using a string value that is stored in a variable. 
 In other words, the object’s property key can be a dynamic value. 
 For example: a variable. The said concept is illustrated in the following example.

Example */

var myCar = new Object()  
var propertyName = "make"; 
myCar[propertyName] = "Ford"; 
console.log(myCar.make)
/* ------------------------------------------------------------------------ */
/* Constructor Function
An object can be created using the following two steps −

Step 1 − Define the object type by writing a constructor function.

Following is the syntax for the same.

function function_name() { 
   this.property_name = value 
}
The ‘this’ keyword refers to the current object in use and defines the object’s property.

Step 2 − Create an instance of the object with the new syntax.

var Object_name= new function_name() 
//Access the property value  

Object_name.property_name */

/* Example − Using a Function Constructor */

function Car() { 
    this.make = "Ford" 
    this.model = "F123" 
 }  
 var obj = new Car() 
 console.log(obj.make) 
 console.log(obj.model)
/* ------------------------------------------------------------------------ */
function Car() { 
    this.make = "Ford" 
 } 
 var obj = new Car() 
 obj.model = "F123" 
 console.log(obj.make) 
 console.log(obj.model)

/* ------------------------------------------------------------------------ */
/* The Object.create Method */

var roles = { 
    type: "Admin", // Default value of properties 
    displayType : function() {  
       // Method which will display type of role 
       console.log(this.type); 
    } 
 }  
 // Create new role type called super_role 
 var super_role = Object.create(roles); 
 super_role.displayType(); // Output:Admin  
 
 // Create new role type called Guest 
 var guest_role = Object.create(roles); 
 guest_role.type = "Guest"; 
 guest_role.displayType(); // Output:Guest

/* ------------------------------------------------------------------------ */
/* The Object.assign() Function

Object.assign(target, ...sources) 

Example − Cloning an Object */

"use strict" 
var det = { name:"Tom", ID:"E1001" }; 
var copy = Object.assign({}, det); 
console.log(copy);  
for (let val in copy) { 
   console.log(copy[val]) 
}
/* ------------------------------------------------------------------------------ */
/* Example − Merging Objects */

var o1 = { a: 10 }; 
var o2 = { b: 20 }; 
var o3 = { c: 30 }; 
var obj1 = Object.assign(o1, o2, o3); 
console.log(obj1);  
console.log(o1);

/* ------------------------------------------------------------------------------ */
/* Rather it holds the reference to the properties contained in the original objects. */
var o1 = { a: 10 }; 
var obj = Object.assign(o1); 
obj.a++ 
console.log("Value of 'a' in the Merged object after increment  ") 
console.log(obj.a);  
console.log("value of 'a' in the Original Object after increment ") 
console.log(o1.a);
/* ------------------------------------------------------------------------------ */
/* Deleting Properties */
// Creates a new object, myobj, with two properties, a and b. 
var myobj = new Object; 
myobj.a = 5; 
myobj.b = 12; 

// Removes the ‘a’ property 
delete myobj.a; 
console.log ("a" in myobj) // yields "false"

/* ------------------------------------------------------------------------------ */
/* Comparing Objects */
/* Example 1 − Different Object References */
var val1 = {name: "Tom"}; 
var val2 = {name: "Tom"}; 
console.log(val1 == val2)  // return false 
console.log(val1 === val2)  // return false

/* ------------------------------------------------------------------------------ */
/* Example 2 − Single Object Reference */

var val1 = {name: "Tom"}; 
var val2 = val1  

console.log(val1 == val2) // return true 
console.log(val1 === val2) // return true
/* ------------------------------------------------------------------------------ */
/* Object De-structuring
The term destructuring refers to breaking up the structure of an entity. 
The destructuring assignment syntax in JavaScript makes it possible to extract data 
from arrays or objects into distinct variables.  */
let student = {
   rollno:20,
   name:'Prijin',
   cgpa:7.2
}

//destructuring to same property name
   let {name,cgpa} = student
   console.log(name)
   console.log(cgpa)

//destructuring to different name
   let {name:student_name,cgpa:student_cgpa}=student
   console.log(student_cgpa)
   console.log("student_name",student_name)
/* ------------------------------------------------------------------------------ */

let student1 = {
   rollno:20,
   name:'Prijin',
   cgpa:7.2
}

// destructuring to already declared variable
let rollno;
({rollno} = student1)
console.log(rollno)

// assign default values to variables

let product ={ id:1001,price:2000} //discount is not product property
let {id,price,discount=.10} = product
console.log(id)
console.log(price)
console.log(discount)
/* -------------------------------------------------------------------------------------------- */
/* destructuring using the rest operator */
// rest operator with object destructuring
let customers= {
   c1:101,
   c2:102,
   c3:103
}

let {c1,...others} = customers
console.log(c1)
console.log(others)

//nested objects
let emp = {
   id:101,
   address:{
      city:'Mumbai',
      pin:1234
   }
}
let {address} = emp;

console.log(address)
let {address:{city,pin}} = emp
console.log(city)

/* -------------------------------------------------------------------------------------------- */