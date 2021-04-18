console.log('-------Simple Array--------');
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
console.log('-------Single statement declaration and initialization--------');
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log('-------Array Object--------');
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
console.log('-------Array Constructor accepts comma separated values--------');
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log('-------Array Destructuring--------');
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
console.log('-------Array Traversal using for…in loop --------');
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
