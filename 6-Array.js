/** An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed 
 *  positions. 
 **/

//Examples: 

var arr = [
 "hello world",
 42,
 true
];
arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3
typeof arr; // "object


// We can also define array by this command

var books = new Array(); 
books[0] = 'Holy Quran';
books[1] = "Bible";

//or
var notebooks = Array();


// Define Array size
var names = new Array(4); // The array length is 4
console.log(names.length);
