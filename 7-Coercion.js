/** Coercion comes in two forms in JavaScript: explicit and implicit. 
 * Explicit coercion is simply that you can see from the code that a conversion from one type to another will occur, whereas 
 * implicit coercion is when the type conversion can happen as more of a nonobvious side effect of some other operation.
 **/

//Examples: 
//Here’s an example of explicit coercion:

var a = "42";
var b = Number( a );
a; // "42"
b; // 42--the number!


//And here’s an example of implicit coercion:
var a = "42";
var b = a * 1; // "42" implicitly coerced to 42 here
a; // "42"
b; // 42--the number!
