// var a = 5;
// console.log(a);
// console.log(b);

// var b = 20;
// console.log(a);
// console.log(b);


let test = "this is Global Test variable";

function classA() {
    console.log("classA",test);
}
function classB() {
    console.log("classB",test);
}
function classC() {
    let test2 = "this is local varible"
    console.log("classC",test);
    console.log("classC",test2);
}
function classD() {
    console.log("classD",test);
}
function classE() {
    console.log("classE",test);
}
function classF() {
    console.log("classF",test);
}
function classG() {
    console.log("classG",test);
}


classA();
classB();
classC();
classD();
classE();
classF();