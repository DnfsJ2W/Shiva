console.log("---------String constructor property---------")
var str = new String( "This is string" );
console.log("str.constructor is:" + str.constructor+'\n')

console.log("---------String constructor property---------")
var uname = new String("Hello World")
console.log(uname)
console.log("Length "+uname.length)

console.log("---------Object prototype---------")
function employee(id, name) {
   this.id = id;
   this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);

/* ------------------------------------------------------------ */
console.log('---------charAt()-------')
var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charAt(0));
console.log("str.charAt(1) is:" + str.charAt(1));
console.log("str.charAt(2) is:" + str.charAt(2));
console.log("str.charAt(3) is:" + str.charAt(3));
console.log("str.charAt(4) is:" + str.charAt(4));
console.log("str.charAt(5) is:" + str.charAt(5));

console.log('---------charCodeAt()-------')
var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charCodeAt(0));
console.log("str.charAt(1) is:" + str.charCodeAt(1));
console.log("str.charAt(2) is:" + str.charCodeAt(2));
console.log("str.charAt(3) is:" + str.charCodeAt(3));
console.log("str.charAt(4) is:" + str.charCodeAt(4));
console.log("str.charAt(5) is:" + str.charCodeAt(5));

console.log('---------concat()-------')
var str1 = new String( "This is string one" );
var str2 = new String( "This is string two" );
var str3 = str1.concat( str2 );
console.log("str1 + str2 : "+str3)

console.log('---------indexOf()-------')
var str1 = new String( "This is string one" );
var index = str1.indexOf( "string" );
console.log("indexOf found String :" + index );
var index = str1.indexOf( "one" );
console.log("indexOf found String :" + index );

console.log('---------lastIndexOf()-------')
var str1 = new String( "This is string one and again string" );
var index = str1.lastIndexOf( "string" );
console.log("lastIndexOf found String :" + index );
index = str1.lastIndexOf( "one" );
console.log("lastIndexOf found String :" + index );

console.log('---------localeCompare()-------')
var str1 = new String( "This is beautiful string" );
var index = str1.localeCompare( "This is beautiful string");
console.log("localeCompare first :" + index );

console.log('---------replace()-------')
var re = /apples/gi; 
var str = "Apples are round, and apples are juicy."; 
var newstr = str.replace(re, "oranges"); 
console.log(newstr)  

var re = /(\w+)\s(\w+)/; 
var str = "zara ali"; 
var newstr = str.replace(re, "$2, $1"); 
console.log(newstr);

console.log('---------search()-------')
var re = /apples/gi;
var str = "Apples are round, and apples are juicy."; 
if ( str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
}   

console.log('---------slice()-------')
var str = "Apples are round, and apples are juicy.";
var sliced = str.slice(3, -2); 
console.log(sliced);

console.log('---------split()-------')
var str = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 3); 
console.log(splitted) 

console.log('---------substr()-------')
var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substr(1,2)); 
console.log("(-2,2): "   + str.substr(-2,2)); 
console.log("(1): "      + str.substr(1)); 
console.log("(-20, 2): " + str.substr(-20,2)); 
console.log("(20, 2): "  + str.substr(20,2));

console.log('---------substring()-------')
var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substring(1,2)); 
console.log("(0,10): "   + str.substring(0, 10)); 
console.log("(5): "      + str.substring(5));   

console.log('---------toLocaleLowerCase()-------')
var str = "Apples are round, and Apples are Juicy."; 
console.log(str.toLocaleLowerCase( ));

var str = "Apples are round, and Apples are Juicy."; 
console.log(str.toLowerCase( )) 

var str = "Apples are round, and Apples are Juicy."; 
console.log(str.toString( ));   

var str = "Apples are round, and Apples are Juicy."; 
console.log(str.toUpperCase( )); 

var str = new String("Hello world"); 
console.log(str.valueOf( ));