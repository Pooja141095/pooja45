// 1. Getters and Setters:-
// const Student = {
//     fName: "Virat", // private property
//     lName: "Kohli",
//     age: 30,
//     team: 'India',
//     // getter
//     getFname() {
//         return this.fName;
//     },
//     // setter
//     setFname(newFname) {
//         this.fName = newFname;
//     }
// }

// console.log(Student.getFname());
// Student.setFname("Rohit");
// console.log(Student.getFname());

// 2. Null Coalescing(??):-
// console.log(false || console.log('hi'));

// function expression1() {
//     return null
// }

// 1.
// const expression2 = 4 * 5

// const result = expression1() ?? expression2

// console.log(result);

// 2.
// const expression1 = "" // falsy
// const expression2 = "Dillion" // truthy

// const result = expression1 || expression2;

// console.log(result);

// 3.
// const expression1 = "" // falsy
// const expression2 = "Dillion" // truthy

// const result = expression1 ?? expression2;

// console.log(result);

// ITERATOR & GENERATOR:

// 1. ITERATOR:
// const arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const str = "PIYUSH";
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }

// 2. GENERATOR:
// Define a generator function using function* syntax
// function* simpleGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// // Create an iterator from the generator function
// const iterator = simpleGenerator();

// // Use the iterator to get values one at a time
// console.log(iterator.next().done);
// console.log(iterator.next().value); // Output: 1
// console.log(iterator.next().value); // Output: 2
// console.log(iterator.next().value); // Output: 3
// console.log(iterator.next().value); // Output: undefined (generator is exhausted)
// console.log(iterator.next().done);