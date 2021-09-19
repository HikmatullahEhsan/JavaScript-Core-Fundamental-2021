/**
 *  Lexical Scope:
 */

//Let’s define 2 functions, having the function innerFunc() is nested inside outerFunc().

function outerFunc() {
  // the outer scope
  let outerVar = 'I am from outside!';

  function innerFunc() {
    let a, b, c;
    // the inner scope
    console.log(outerVar); // 'I am from outside!'
  }

  return innerFunc;
}

const inner = outerFunc();
inner();

/**Look at the last line of the snippet inner(): the innerFunc() invokation happens outside of outerFunc() scope. Still, how does JavaScript understand that outerVar inside innerFunc() corresponds to the variable outerVar of outerFunc()?
 * The answer is due to lexical scoping.
 * JavaScript implements a scoping mechanism named lexical scoping (or static scoping). Lexical scoping means that the accessibility of variables is determined statically by the position of the variables within the nested function scopes: the inner function scope can access variables from the outer function scope.
 * A formal definition of lexical scope:
 * The lexical scope consists of outer scopes determined statically.
 * In the example, the lexical scope of innerFunc() consists of the scope of outerFunc().
 * Moreover, the innerFunc() is a closure because it captures the variable outerVar from the lexical scope.
 */