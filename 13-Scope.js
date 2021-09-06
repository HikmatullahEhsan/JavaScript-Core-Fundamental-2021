/**
 * Scope:
 * The scope is an important concept that manages the availability of variables. 
 * The scope is at the base closures, defines the idea of global and local variables.
 */

//Before diving into what the scope is, let’s try an experiment that demonstrates how the scope manifests itself.

//Let’s say you define a variable message:

const message = 'Hello';
console.log(message); // 'Hello'
//Then, you could easily log this variable in the next line after the declaration. No questions here.

//Now, let’s move the declaration of message inside of an if code block:

if (true) {
  const message = 'Hello';
}
console.log(message); // ReferenceError: message is not defined


/**
 * Lexical Scope:
 * Lexical scope means that scope is defined by author-time decisions of where functions are declared.
 * The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and
 * thus predict how they will be looked up during execution.
 */