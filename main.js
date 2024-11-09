//strings 

const myVariable = "Mathematics";

//length property

console.log(myVariable.length);

//string methods

console.log(myVariable.indexOf("Math"));
console.log(myVariable.slice(0, 4));
console.log(myVariable.replace("Math", "Maths"));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.charAt(4));
console.log(myVariable[4]);
console.log(myVariable.split("")); 
console.log(myVariable.includes("Math")); 

//numbers

console.log(5 + 5);

const myVariable1 = "43.089768aa";
const myNumber = 42;
const myFloat = 42.42;

console.log(myVariable1 + myNumber);
console.log(myNumber + myFloat);
console.log(Number(myVariable1) + myFloat);
console.log(Number(true));
console.log(Number(false));

console.log(Number.parseInt(myFloat));

console.log(Number.parseFloat(myVariable1));

console.log(myNumber === myFloat);

console.log(Number.isInteger(myNumber));

console.log(myFloat);

//chain
console.log(parseFloat(myVariable1).toFixed(2).toString());
console.log(Number.isNaN("dhuddu"));
console.log(Number.isNaN(5));
console.log(isNaN("dhuudu"));




