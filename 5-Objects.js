/** The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any
 *  type. This is perhaps one of the most useful value types in all of Java‐Script:
**/

//Examples:
var obj = {
 a: "hello world",
 b: 42,
 c: true
};
obj.a; // "hello world"
obj.b; // 42
obj.c; // true


obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true