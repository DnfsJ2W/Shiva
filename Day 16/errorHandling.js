/* ------------------------------------------------------------------------------------- */
var a = 100; 
var b = 0; 
try { 
   if (b == 0 ) { 
      throw('Divide by zero error.'); 
   } else { 
      var c = a / b; 
   } 
} 
catch( e ) { 
   console.log("Error: " + e ); 
}
/* ----------------------------------------------------------------------------------------- */
function MyError(message) { 
    this.name = 'CustomError'; 
    this.message = message || 'Error raised with default message'; 
 } 
 try { 
    throw new MyError(); 
 } catch (e) {  
    console.log(e.name);      
    console.log(e.message);  // 'Default Message' 
 }
 /* -------------------------------------------------------------------------------------- */

 function MyError(message) { 
    this.name = 'CustomError'; 
    this.message = message || 'Default Error Message';  
 } try { 
    throw new MyError('Printing Custom Error message'); 
 } 
 catch (e) { 
    console.log(e.name);      
    console.log(e.message);  
 }