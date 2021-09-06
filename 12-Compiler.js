/**
 * JavaScript is under category of “dynamic” or “interpreted” language, which it's compiler has many steps in JavaScript, including: 
 * a)Tokenizing
 * b)Parsing
 * c)Code-Generation
 * 
 */

/**
 * Tokenizing:
 * Breaking up a string of characters into meaningful (to the language) chunks, called tokens. 
 * For instance, consider the program var a = 2;. This program would likely be broken up into the following
 * tokens: var, a, =, 2, and ;. Whitespace may or may not be persisted as a token, depending on whether its meaningful or not.
 */

 /**
  * Parsing:
  * taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure
  * of the program. This tree is called an “AST” (abstract syntax tree).
  * The tree for var a = 2; might start with a top-level node called Variable Declaration, with a child node called Identifier
  * (whose value is a), and another child called Assignment Expression, which itself has a child called NumericLiteral
  * (whose value is 2).
  */

  /**
   * Code-Generation:
   * The process of taking an AST and turning it into executable code.
   * This part varies greatly depending on the language, the platform it’s targeting, and so on.
   * 
   */


