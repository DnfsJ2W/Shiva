const s1 = Symbol();
   const s2 = Symbol();
   console.log(typeof s1)
   console.log(s1===s2)
   const s3 = Symbol("hello");//description
   const s4 = Symbol("hello");
   console.log(s3)
   console.log(s4)
   console.log(s3==s4)
   
console.log('---------New string method-------------')
   const userId = Symbol.for('userId') // creates a new Symbol in registry
   const user_Id = Symbol.for('userId') // reuses already created Symbol
   console.log(userId == user_Id)    
   const studentId = Symbol("studentID") // creates symbol but not in registry
   const student_Id = Symbol.for("studentID")// creates a new Symbol in registry
   console.log(studentId == student_Id)

   const user_Id1 = Symbol.for('userId') // creates a new Symbol in registry
   console.log(Symbol.keyFor(user_Id1)) // returns the key of a symbol in registry
   const userId1 = Symbol("userId")// symbol not in registry
   console.log(Symbol.keyFor(userId1)) //userId symbol is not in registry

   console.log('---------Symbol & Classes-------------')
   const COLOR = Symbol()
   const MODEL = Symbol()
   const MAKE = Symbol()
   class Bike {
      constructor(color ,make,model){
      this[COLOR] = color;
      this[MAKE] = make;
      this[MODEL] = model;
   }
}
let bike = new Bike('red','honda','cbr')
console.log(bike)
//property can be accessed ony if symbol name is known
console.log(bike[COLOR])