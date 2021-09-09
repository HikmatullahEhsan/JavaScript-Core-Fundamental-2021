/**
 * Closure: means related to something, the lexical scope allows to access the variables statically of the outer scopes.
 * There’s just one step until the closure! 
 */

//Example: 
function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
    }
    innerFunc();
}
outerFunc();


// Note that innerFunc() invocation happens inside its lexical scope (the scope of outerFunc()).
// Let’s make a change: innerFunc() to be invoked outside of its lexical scope (outside of outerFunc()). Would innerFunc() still be able to access outerVar?
// Let’s make the adjustments to the code snippet:
function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
       console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
}
const myInnerFunc = outerFunc();
myInnerFunc();