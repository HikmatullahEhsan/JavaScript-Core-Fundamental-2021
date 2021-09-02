/**
 * Blocks are just to separte or group the specific code in programming. 
 * a block is defined by wrapping one or more statements inside a curly-brace pair
**/

// Examples: 
{
    let a = 10; 
    let b = 3; 
    let c = a* b;
}


{ } // Consider:

var amount = 99.99;

// a general block
{
 amount = amount * 2;
 console.log( amount ); // 199.98
}

//This kind of standalone { .. } general block is valid, but isn’t as commonly seen in JS programs. Typically, blocks are attached to
//some other control statement, such as an if statement
var amount = 99.99;
// is amount big enough?
if (amount > 10) { // <-- block attached to `if`
 amount = amount * 2;
 console.log( amount ); // 199.98
}

