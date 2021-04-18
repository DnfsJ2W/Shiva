var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* class Person {
}
 */
var Car = /** @class */ (function () {
    //constructor  
    function Car(engine) {
        this.engine = engine;
    }
    //function  
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
//create an object  
var obj = new Car("Engine 1");
//access the field  
console.log("Reading attribute value Engine as : " + obj.engine);
//access the function 
obj.disp();
console.log('\n-------Class Inheritance-------');
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle: " + this.Area);
    };
    return Circle;
}(Shape));
var obj1 = new Circle(223);
obj1.disp();
console.log('\n-------Multi level Inheritance-------');
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); //indirectly inherits from Root by virtue of inheritance  
var obj2 = new Leaf();
obj2.str = "hello";
console.log(obj2.str);
console.log('\n-------Class inheritance and Method Overriding-------');
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called…");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string…");
    };
    return StringPrinter;
}(PrinterClass));
var obj3 = new StringPrinter();
obj3.doPrint();
console.log('\n-------Static Keyword-------');
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // initialize the static variable  
StaticMem.disp(); // invoke the static method
console.log('\n-------The instanceof operator-------');
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj4 = new Person();
var isPerson = obj4 instanceof Person;
console.log(" obj is an instance of Person " + isPerson);
console.log('\n-------Data hiding-------');
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj5 = new Encapsulate();
console.log(obj5.str); //accessible  
console.log(obj5.str2); //compilation Error as str2 is private
console.log('\n-------Classes and Interface-------');
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj6 = new AgriLoan(10, 1);
console.log("Interest is : " + obj6.interest + " Rebate is : " + obj6.rebate);
