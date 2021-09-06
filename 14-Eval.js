/**
 * The eval(..) function in JavaScript takes a string as an argument and treats the contents of the string as
 * if it had actually been authored code at that point in the program.
 */


/**
 * Example: Consider the following code:
 * 
*/ 

function foo(str, a) {
 eval( str ); // cheating!
 console.log( a, b );
}
var b = 2;
foo( "var b = 3;", 1 ); // 1, 3
 

//Writing with "Strict Mode"
function foo(str) {
  "use strict";
  eval( str );
  console.log( a ); // ReferenceError: a is not defined
}
foo( "var a = 2" );
   