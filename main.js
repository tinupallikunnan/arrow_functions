// traditional function
//function greet(name) {
//    return "Hello, My name is " + name;
//}

// Anonymous function
//let greet = function (name) {
//    return "Hello, My name is " + name;
//}

// Arrow functions
//let greet = (name) => {return "Hello, My name is " + name;}

//let greet = (name) => "Hello, My name is " + name;

let greet = name => "Hello, My name is " + name + "!";
 
//Place holder(another method)
//let greet = name => `Hi ${name}!`;

console.log(greet("John"));
console.log(greet("James"));

