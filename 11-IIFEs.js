/**
 * IIFEs stands for : Immediately Invoked Function Expressions
 */

// There’s another way to execute a function expression, which is typically referred to as an immediately invoked function expression

//Example:

(function salam(){
   console.log( "Salam to all!" );
})();


// "Salam to all!"


//The outer ( .. ) that surrounds the (function salam(){ .. }) function expression is just a nuance of JS grammar needed to prevent it from being treated as a normal
//function declaration.
//The final () on the end of the expression—the })(); line—is what actually executes the function expression referenced immediately before it.
//That may seem strange, but it’s not as foreign as first glance. Consider the similarities between foo and IIFE here:

function salam() { console.log( "Salam to all!" ); }
// `foo` function reference expression,
// then `()` executes it
salam();
// `IIFE` function expression,
// then `()` executes it
(function salam(){ "Salam to all!"  })();