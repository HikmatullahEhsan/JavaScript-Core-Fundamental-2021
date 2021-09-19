/**
 * Function Scope: 
 * A function in JavaScript defines a scope for variables declared using var, let and const.
 * Let’s declare a var variable within a function body:
 */

function run() {
  // "run" function scope
  var message = 'Run, Forrest, Run!';
  console.log(message); // 'Run, Forrest, Run!'
}

run();
console.log(message); 


/** var variables are 'function scope. ... It means they are only available inside the function they're created in
 * or if not created inside a function, they are 'globally scoped. ' 
 * If var is defined inside a function and I subsequently try to call it outside the function, it won't work.
 ** /

 
// Advantage of Function Scope:

/**
 * 1-Hiding in Plain Scope:
 * you can “hide” variables and functions by enclosing them in the scope of a function.
 * Why would “hiding” variables and functions be a useful technique?
 * This principle extends to the choice of which scope to contain variables and functions. 
 * If all variables and functions were in the global scope, they would of course be accessible to any nested scope.
 */
//  For example:
function doSomething(a) {
  b = a + doSomethingElse( a * 2 );
  console.log( b * 3 );
}
function doSomethingElse(a) {
  return a - 1;
}
var b;

//A more “proper” design would hide these private details inside the scope of doSomething(..), such as doSomething( 2 ); // 15

function doSomething(a) {
    function doSomethingElse(a) {
    return a - 1;
    }
    var b;
    b = a + doSomethingElse( a * 2 );
    console.log( b * 3 );
}
doSomething( 2 ); // 15


/** 2-Collision Avoidance:
 * Another benefit of “hiding” variables and functions inside a scope is to avoid unintended collision between two different identifiers with
 * the same name but different intended usages. Collision results often in unexpected overwriting of values.
 *
 */
//  For example:
function foo() {
 function bar(a) {
    i = 3; // changing the `i` in the enclosing scope's
    // for-loop
    console.log( a + i );
 }
 for (var i=0; i<10; i++) {
 bar( i * 2 ); // oops, inifinite loop ahead!
 }
}
foo();
