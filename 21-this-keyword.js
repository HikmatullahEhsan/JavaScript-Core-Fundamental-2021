
function bar() {
    console.log( this.a );
}
function foo() {
    var a = 2;
    this.bar();
}
foo(); //ReferenceError: a is not defined