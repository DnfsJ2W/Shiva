console.log('--------Interface and Objects--------')

interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
   } 

   var customer:IPerson = { 
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
   } 
   console.log("Customer Object ") 
   console.log(customer.firstName) 
   console.log(customer.lastName) 
   console.log(customer.sayHi()) 

   var employee:IPerson = { 
    firstName:"Jim", 
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
   } 
     
   console.log("\nEmployee Object ") 
   console.log(employee.firstName); 
   console.log(employee.lastName);

console.log('\n--------Interfaces and Arrays--------')

interface namelist { 
    [index:number]:string 
   } 
   //var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
   var list2:namelist = ["John","Bran"] 
   console.log('namelist: ' + list2[0] + list2[1])

   interface ages { 
    [index:string]:number  
   } 
   var agelist:ages; 
   //agelist['abc'] = 15 // Ok  
   //agelist[2] = "nine" // Error
   //agelist['ab'] = 24 // Ok  
   //console.log("agelist: " + agelist)

   console.log('\n--------Interfaces and Inheritance--------')

   console.log('\n--------Single Interface Inheritance--------')

   
interface Person { 
    age:number  
   } 
   interface Musician extends Person {
    instrument:string 
   } 
   var drummer = <Musician>{}; 
   drummer.age = 27 
   drummer.instrument = "Drums" 
   console.log("Age: "+drummer.age) 
   console.log("Instrument: "+drummer.instrument)

   console.log('\n--------Multiple Interface Inheritance--------')

   interface IParent1 { 
    v1:number  
   } 
   interface IParent2 { 
    v2:number  
   } 
   interface Child extends IParent1, IParent2 { } 
   var Iobj:Child = { v1:12, v2:23} 
   console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)