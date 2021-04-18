console.log('--------Interface and Objects--------');
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("\nEmployee Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log('\n--------Interfaces and Arrays--------');
//var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
var list2 = ["John", "Bran"];
console.log('namelist: ' + list2[0] + list2[1]);
var agelist;
//agelist['abc'] = 15 // Ok  
//agelist[2] = "nine" // Error
//agelist['ab'] = 24 // Ok  
//console.log("agelist: " + agelist)
console.log('\n--------Interfaces and Inheritance--------');
console.log('\n--------Single Interface Inheritance--------');
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);
console.log('\n--------Multiple Interface Inheritance--------');
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
