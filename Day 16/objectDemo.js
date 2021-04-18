/* Example − Merging Objects */
/* 
var o1 = { a: 10 }; 
var o2 = { b: 20 }; 
var o3 = { c: 30 }; 
var obj = Object.assign(o1, o2, o3); 
console.log(obj);  
console.log(o1); */
/* --------------------------------------------------------------- */
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
 