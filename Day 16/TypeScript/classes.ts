/* class Person { 
}
 */
class Car { 
    //field  
    engine:string; 
    //constructor  
    constructor(engine:string) { 
    this.engine = engine  
    }  
    //function  
    disp():void { 
    console.log("Engine is : "+this.engine) 
    } 
   }
//create an object  
var obj = new Car("Engine 1") 

//access the field  
console.log("Reading attribute value Engine as : "+obj.engine)  

//access the function 
obj.disp()

console.log('\n-------Class Inheritance-------')


class Shape { 
    Area:number  
     
    constructor(a:number) { 
    this.Area = a  
    } 
   }
   
   class Circle extends Shape { 
    disp():void { 
    console.log("Area of the circle: "+this.Area) 
    } 
   } 
     
   var obj1 = new Circle(223); 
   obj1.disp()
   
   console.log('\n-------Multi level Inheritance-------')

   class Root { 
    str:string; 
   } 
   class Child extends Root {} 
   class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
   var obj2 = new Leaf(); 
   obj2.str ="hello" 
   console.log(obj2.str)

   console.log('\n-------Class inheritance and Method Overriding-------')
   class PrinterClass { 
    doPrint():void { 
    console.log("doPrint() from Parent called…") 
    } 
   } 
   class StringPrinter extends PrinterClass { 
    doPrint():void { 
    super.doPrint() 
    console.log("doPrint() is printing a string…") 
    } 
   } 
   var obj3 = new StringPrinter() 
   obj3.doPrint()

   console.log('\n-------Static Keyword-------')

   class StaticMem {  
    static num:number; 
     
    static disp():void { 
    console.log("The value of num is "+ StaticMem.num) 
    } 
   } 
   StaticMem.num = 12 // initialize the static variable  
   StaticMem.disp() // invoke the static method

   console.log('\n-------The instanceof operator-------')

   class Person{ } 
    var obj4 = new Person() 
    var isPerson = obj4 instanceof Person; 
    console.log(" obj is an instance of Person " + isPerson);

    console.log('\n-------Data hiding-------')

    class Encapsulate { 
        str:string = "hello" 
        private str2:string = "world" 
       } 
       var obj5 = new Encapsulate() 
       console.log(obj5.str) //accessible  
       //console.log(obj5.str2) //compilation Error as str2 is private
       
       console.log('\n-------Classes and Interface-------')

       interface ILoan { 
        interest:number  
       } 
       class AgriLoan implements ILoan { 
        interest:number  
        rebate:number  
         
        constructor(interest:number,rebate:number) { 
        this.interest = interest  
        this.rebate = rebate  
        } 
       } 
       var obj6 = new AgriLoan(10,1) 
       console.log("Interest is : "+obj6.interest+" Rebate is : "+obj6.rebate )