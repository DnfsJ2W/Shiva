/* function arrayFromArgs() {
    return Array.from(arguments);
}

console.log(arrayFromArgs(1, 'A')); */

function arrayFromArgs() {
    /* var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    } */
    return [1,2,3];
}
/* var fruits = ; */
console.log(arrayFromArgs());
var x={
a: function()
{
    console.log('invoke');
}
}
var obj =Object.create(x)
obj.a()

