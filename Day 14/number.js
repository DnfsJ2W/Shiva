/* Number.EPSILON
This property represents the smallest interval between two representable numbers.
Example */

var interval = Number.EPSILON
console.log(interval)
/* ----------------------------------------------------
Number.MAX_SAFE_INTEGER
This property represents the maximum safe integer in JavaScript i.e. (2^ 53 - 1) */

var interval = Number.MAX_SAFE_INTEGER
console.log(interval)
/* ----------------------------------------------------
The Number.MAX_VALUE property belongs to the static Number object. It represents constants for the largest possible positive numbers that JavaScript can work with.

The actual value of this constant is 1.7976931348623157 x 10308
*/
var val = Number.MAX_VALUE;
Number.MAX_VALUE

var val = Number.MIN_SAFE_INTEGER;
console.log("Value of Number. MIN_SAFE_INTEGER: " + val );

var val = Number.MAX_VALUE;
console.log("Value of Number.MIN_VALUE : " + val );
/* ---------------------------------------------------------------- */
var dayOfMonth = 50;
if (dayOfMonth < 1 || dayOfMonth > 31) {
   dayOfMonth = Number.NaN
   console.log("Day of Month must be between 1 and 31." + dayOfMonth)
} else {
   console.log("day of month "+dayOfMonth)
}
/* --------------------------------------------- */
var val = Number.NEGATIVE_INFINITY;
console.log("Value of Number.NEGATIVE_INFINITY : " + val );
/* ------------------------------------------------ */
var val = Number.POSITIVE_INFINITY;
console.log("Value of Number.POSITIVE_INFINITY : " + val );
/* ------------------------------------------------ */
console.log('------------------Number methods--------------')
var res = Number.isNaN(10);
console.log(res);
/* ------------------------------------------------ */
var res = Number.isFinite(10);
console.log(res);
/* ------------------------------------------------ */
var res = Number.isSafeInteger(10);
console.log(res);
/* ------------------------------------------------ */
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.23"));
console.log(Number.parseInt("10.99"));
/* ------------------------------------------------ */
console.log('----------------Number Instances Methods---------------------')
//toExponential()
var num1 = 2
var val = num1.toExponential();
console.log(val)
/* ------------------------------------------------ */
var num3 = 177.234
console.log("num3.toFixed() is "+num3.toFixed())
console.log("num3.toFixed(2) is "+num3.toFixed(2))
console.log("num3.toFixed(6) is "+num3.toFixed(6))
/* ------------------------------------------------ */
var num = new Number(177.1234);
console.log( num.toLocaleString());
/* ------------------------------------------------ */
var num = new Number(1.123456);
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
/* ------------------------------------------------ */
var num = new Number(10);
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
/* ------------------------------------------------ */
var num = new Number(10);
console.log(num.valueOf());
/* ------------------------------------------------ */
console.log('-----------Binary and Octal Literals-------------')
console.log(0b001) 
console.log(0b010) 
console.log(0b011) 
console.log(0b100)
/* ------------------------------------------------ */
console.log(0o010)
console.log(0o100)
/* ------------------------------------------------ */
console.log(0x010)
console.log(0x100)
/* ------------------------------------------------ */
console.log('---Object literal Extension----')
let firstName = 'Tutorials',lastName='Point'
   let company = {
      firstName,
      lastName
   }
   console.log(company)
   console.log(company.firstName)
   console.log(company.lastName)
/* ------------------------------------------------ */
console.log('----------- Computed Properties----------')
/* let suffix = 'Name'
   let company = {
      ['first'+suffix]:'Tutorials',
      ['last'+suffix]:'Point'
   }
   console.log(company)
   console.log(company['firstName'])
   console.log(company['lastName']) */
/* ----------------------------------------------------------- */
/* console.log('---Concise method syntax---')
let firstName = 'Tutorials',lastName='Point'
   let company = {
      firstName,
      lastName,
      getFullName(){
         return this.firstName+" - "+this.lastName
      }
   }
   console.log(company.getFullName())
   console.log(company) */