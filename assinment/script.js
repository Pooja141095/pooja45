//1 assingmet 1.
// Reverse a string

let input1 = prompt("Enter string to check:");
let rev_input1 = "";

for (let index = input.length - 1; index >= 0; index--)
   rev_input += input.charAt(index);
console.log(`The Reverse of ${input} is ${rev_input1}`);


//  2.// Count the number of vowels
let user_input = prompt('enter number');
let count = 0;
let curr_char;
let flag;
for (let i = 0; i < user_input.length; i++) {
   flag = false;
   curr_char = user_input.charAt(i);
   curr_char = curr_char.toLowerCase();
   switch (curr_char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
         count++;

   }
}
console.log(`Total number of vowels are: ${count}`);


//3. Check if a string is a palindrome
let input = prompt("Enter string to check:");
let rev_input = "";

for (let index = input.length - 1; index >= 0; index--)
   rev_input += input.charAt(index);

//comparing string 
if (input.toLocaleLowerCase() === rev_input.toLocaleLowerCase())

   console.log(`Reverse is: ${rev_input} \n pallindrome!`);
else

   console.log(`Reverse is: ${rev_input} \n Not pallindrome!`);


//4 Capitalize the first letter of each word in a sentence without using functions.


// let arr = 'i have learned something new today';
// let str1 = arr.split(" ");
// for (let i = 0; i < str1.length; i++) {
//    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
// }
// let str2 = str1.join(" ");
// console.log(str2);




//5 remove all space 
// let str = " Hello, World! ";
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//    if (str[i] !== " ") {
//       newStr += str[i];
//    }
// }
// console.log(newStr);
