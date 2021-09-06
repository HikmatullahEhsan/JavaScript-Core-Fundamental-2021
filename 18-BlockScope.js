/**
 * Block Scope:  
 * A code block in JavaScript defines a scope for variables declared using let and const.
 */

//Example: 

if (true) {
  // "if" block scope
  const message = 'Hello';
  console.log(message); // 'Hello'
}
console.log(message); // throws ReferenceError

//The first console.log(message) correctly logs the variable because message is accessed from the scope where it is defined.

//But the second console.log(message) throws a reference error because message variable is accessed outside of its scope: the variable doesn’t exist here.

//The code block of if, for, while statements also create a scope.

//In the following example for loop defines a scope:

for (const color of ['green', 'red', 'blue']) {
  // "for" block scope
  const message = 'Hi';
  console.log(color);   // 'green', 'red', 'blue'
  console.log(message); // 'Hi', 'Hi', 'Hi'
}
console.log(color);   // throws ReferenceError
console.log(message); // throws ReferenceError
//color and message variables exist within the scope of while code block.

//Same way the code block of while statement creates a scope for its variables:

while (/* condition */) {
  // "while" block scope
  const message = 'Hi';
  console.log(message); // 'Hi'
}
console.log(message); // => throws ReferenceError


//message is defined within while() body, consequently message is accessible only within while() body.

//In JavaScript you can define standalone code blocks. The standalone code blocks also delimit a scope:
{
  // block scope
  const message = 'Hello';
  console.log(message); // 'Hello'
}
console.log(message); // throws ReferenceError