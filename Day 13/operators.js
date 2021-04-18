/* var x = 4 
var y = -x; 
console.log("value of x: ",x); //outputs 4 
console.log("value of y: ",y); //outputs -4

var msg = "hello"+"world" 
console.log(msg) 

var num = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

var num = 12 
console.log(typeof num); //output: number

function addThreeNumbers(a,b,c){
    return a+b+c;
 }
 const arr = [10,20,30]
 console.log('sum is :',addThreeNumbers(...arr))
 console.log('sum is ',addThreeNumbers(...[1,2,3]))
 
 //copy array using spread operator
 let source_arr = [10,20,40]
 let dest_arr = [...source_arr]
 console.log(dest_arr)
  
 //concatenate two arrays
 let arr1 = [10,20,60]
 let arr2 =[40,50,60]
 let arr3 = [...arr1,...arr2]
 console.log(arr3)
*/

  //copy object
  let student1 ={firstName:'Mohtashim',company:'TutorialsPoint'}
  let student2 ={...student1}
  console.log(student2)
  //concatenate objects
  let student3 = {lastName:'Mohammad'}
  let student4 = {...student1,...student3}
  console.log(student4)