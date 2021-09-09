/**
 * Module: to seperate a related portions of the code, or gathering  of related items togheter and can access it through module. 
 * ES6 adds first-class syntax support for the concept of modules. When loaded via the module system, ES6 treats a file as a separate module.
 * Each module can both import other modules or specific API members, as well export their own public API members
 * */

// Example:
// login.js
function hello(who) {
 return who +" is logging into system";
}
export hello;


//welcome.js
// import only `hello()` from the "login" module
import hello from "login";
var hungry = "Said Shah Ahmadi";
function awesome() {
  console.log(
     hello( hungry ).toUpperCase()
 );
}
