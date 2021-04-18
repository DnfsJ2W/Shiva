/* --------------------------------------------------------------------------------- */
/* Example: Declaring a class */
class Polygon1 { 
   constructor(height, width) { 
      this.height = height; 
      this.width = width; 
   } 
}
/* --------------------------------------------------------------------------------- */
/* Example: Class Expression */
var Polygon2 = class { 
   constructor(height, width) { 
      this.height = height; 
      this.width = width; 
   } 
}

/* --------------------------------------------------------------------------------- */
/* The above code snippet represents an unnamed class expression. 
A named class expression can be written as. */

var Polygon3 = class Polygon3 { 
   constructor(height, width) { 
      this.height = height; 
      this.width = width; 
   } 
}

/* --------------------------------------------------------------------------------- */
/* Creating Objects */
/* var object_name= new class_name([ arguments ])  */
/* var obj = new Polygon(10,12) */

/* --------------------------------------------------------------------------------- */
/* Accessing a function 
obj.function_name() */
/* --------------------------------------------------------------------------------- */
/* Example: Putting them together */
'use strict' 
class Polygon { 
   constructor(height, width) { 
      this.h = height; 
      this.w = width;
   } 
   test() { 
      console.log("The height of the polygon: ", this.h) 
      console.log("The width of the polygon: ",this. w) 
   } 
} 

//creating an instance  
var polyObj = new Polygon(10,20); 
polyObj.test();
/* --------------------------------------------------------------------------------- */
/* class Student {
    constructor(rno,fname,lname){
       this.rno = rno
       this.fname = fname
       this.lname = lname
       console.log('inside constructor')
    }
    set rollno(newRollno){
       console.log("inside setter")
       this.rno = newRollno
    }
 }
 let s1 = new Student(101,'Sachin','Tendulkar')
 console.log(s1)
 //setter is called
 s1.rollno = 201
 console.log(s1) */
 
/* --------------------------------------------------------------------------------- */
 
class Student {
    constructor(rno,fname,lname){
       this.rno = rno
       this.fname = fname
       this.lname = lname
       console.log('inside constructor')
    }
    get fullName(){
       console.log('inside getter')
       return this.fname + " - "+this.lname
    }
 }
 let s1 = new Student(101,'Sachin','Tendulkar')
 console.log(s1)
 //getter is called
 console.log(s1.fullName)
 
 /* --------------------------------------------------------------------------------- */
