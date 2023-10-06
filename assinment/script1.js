
//Question 1: Map Basics
//Create a JavaScript program that uses a Map to store the names of five countries as keys and their corresponding capitals as values. Print out the names of all the countries and their capitals stored in the Map.


//1 Create a new Map
// let countryCapitalMap = new Map();

// // Add countries and capitals to the Map
// countryCapitalMap.set('India', 'New Dehli');
// countryCapitalMap.set('France', 'Paris');
// countryCapitalMap.set('iran', 'Tehran');
// countryCapitalMap.set('Japan', 'Tokyo');
// countryCapitalMap.set('Austrialia', 'Canberra');


// console.log('Countries and Capitals:');
// for (const [country, capital] of countryCapitalMap) {
//   console.log(`Country: ${country}, Capital: ${capital}`);
// }


//uestion 2: Set Deduplication
//Write a JavaScript program that takes an array of numbers as input and uses a Set to remove duplicates from the array. After removing duplicates, print the elements of the Set.

// let  Deduplication= [1,2,4,1,6,8,2,5,9,2,0,9,7,6,3,4,6,7,8,4,2,1,5,8,9,0,2,4,5,3,2,6,8,9,6];

// let numbers1 = new Set(Deduplication);
// console.log(numbers1);

//Question 3: Map Operations
//Implement a JavaScript program that demonstrates the following operations on a Map:

//Add three key-value pairs to the Map.
//Print the keys and values in the Map.
//Check if a specific key exists in the Map.
//Remove one key-value pair from the Map


// 1Add three key-value pairs to the Map.
// let myMap = new Map();

// // Adding Key-Value Pairs
// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set('country', 'USA');

// // Getting Values by Key
// console.log('Name:', myMap.get('name'));
// console.log('Age:', myMap.get('age'));
// console.log('Country:', myMap.get('country'));


//2 Print the keys and values in the Map.
// let arr = [
//     [1,'pooja'],
//     [2,'amt'],
// ];
// let myMap = new Map(arr);
// console.log(myMap);


//3Check if a specific key exists in the Map.


// let name = new Map([['pooja','dhaker'],['amit','choudhary']]);

// console.log(name.has('pooja'));

//4Remove one key-value pair from the Map
// let player = new Map([['pooja','dhaker'],['amit','choudhary']]);

// player.delete('amit');

// console.log(player);



//Question 4: Set Set Operations
//Create a JavaScript program that creates two Sets, one for storing even numbers between 1 and 10, and another for storing odd numbers between 1 and 10. Perform the following set operations:

//Find the union of the two sets.
//Find the intersection of the two sets.
//Find the elements that are only in the even numbers set.
//Find the elements that are only in the odd numbers set.

// Create a Set for even numbers
const evenNumbers = new Set();
for (let i = 2; i <= 10; i += 2) {
  evenNumbers.add(i);
}

// Create a Set for odd numbers
const oddNumbers = new Set();
for (let i = 1; i <= 10; i += 2) {
  oddNumbers.add(i);
}

// Find the union of the two sets
const unionSet = new Set([...evenNumbers, ...oddNumbers]);
console.log('Union of even and odd numbers:', unionSet);

// Find the intersection of the two sets
const intersectionSet = new Set([...evenNumbers].filter(x => oddNumbers.has(x)));
console.log('Intersection of even and odd numbers:', intersectionSet);

// Find the elements that are only in the even numbers set
const evenOnlySet = new Set([...evenNumbers].filter(x => !oddNumbers.has(x)));
console.log('Elements only in even numbers:', evenOnlySet);

// Find the elements that are only in the odd numbers set
const oddOnlySet = new Set([...oddNumbers].filter(x => !evenNumbers.has(x)));
console.log('Elements only in odd numbers:', oddOnlySet);


//Question 5: Map Iteration
//Write a JavaScript program that uses a Map to store the names of fruits as keys and their corresponding colors as values. Write a loop to iterate through the Map and print out each fruit's name and color.


// Create a new Map to store fruits and their colors
// let fruitColorMap = new Map();

// fruitColorMap.set('apple', 'red');
// fruitColorMap.set('banana', 'yellow');
// fruitColorMap.set('grape', 'purple');
// fruitColorMap.set('orange', 'orange');
// fruitColorMap.set('blueberry', 'blue');

// // Iterate through the Map and print fruit names and colors
// console.log('Fruit Names and Colors:');
// for (let [fruit, color] of fruitColorMap) {
//   console.log(`Fruit: ${fruit}, Color: ${color}`);
// }


//Question 6: Set Size and Clear
//Create a JavaScript program that demonstrates the use of the Set's size property and clear() method. Create a Set of integers, add some elements to it, print its size, and then clear the Set. Print its size again to confirm that it's empty.

// Create a Set of integers
// let integerSet = new Set();

// integerSet.add(1);
// integerSet.add(2);
// integerSet.add(3);
// integerSet.add(4);
// console.log('Size of the Set:', integerSet.size);

// // Clear the Set
// integerSet.clear();

// console.log('Size of the Set after clearing:', integerSet.size);

//Question 7: Map Value Update
//Implement a JavaScript program that uses a Map to store the names of cities as keys and their populations as values. Write a function that updates the population of a given city. Print the updated population of the city after the update.
// Create a Map to store city populations

// Create a Map to store city populations
// let cityPopulationMap = new Map();

// cityPopulationMap.set('New York', 8622698);
// cityPopulationMap.set('Los Angeles', 3999759);
// cityPopulationMap.set('Chicago', 2716000);
// cityPopulationMap.set('Houston', 2320268);
// cityPopulationMap.set('Phoenix', 1680992);

// function updateCityPopulation(city, newPopulation) {
//   if (cityPopulationMap.has(city)) {
//     cityPopulationMap.set(city, newPopulation);
//     console.log(`Population of ${city} updated to ${newPopulation}`);
//   } else {
//     console.log(`${city} not found in the map.`);
//   }
// }

// updateCityPopulation('New York', 8744837);

// updateCityPopulation('Miami', 463347);
// console.log('Updated Population of New York:', cityPopulationMap.get('New York'));


//Question 8: Set Contains
//Create a JavaScript program that uses a Set to store the names of five programming languages. Implement a function that checks if a given programming language name exists in the Set and returns a boolean value.

// Create a Set to store programming language names
// let programmingLanguages = new Set();

// programmingLanguages.add('JavaScript');
// programmingLanguages.add('Python');
// programmingLanguages.add('Java');
// programmingLanguages.add('C++');
// programmingLanguages.add('Ruby')
// function hasProgrammingLanguage(language) {
//     return programmingLanguages.has(language);
// }


// let languageToCheck = 'Python';
// if (hasProgrammingLanguage(languageToCheck)) {
//     console.log(`${languageToCheck} exists in the Set.`);
// } else {
//     console.log(`${languageToCheck} does not exist in the Set.`);
// }

// let languageToCheck2 = 'Swift';
// if (hasProgrammingLanguage(languageToCheck2)) {
//     console.log(`${languageToCheck2} exists in the Set.`);
// } else {
//     console.log(`${languageToCheck2} does not exist in the Set.`);
// }


//question 9: Map Keys and Values
//Write a JavaScript program that uses a Map to store the names of countries as keys and their official languages as values. Print out the keys and values of the Map separately.
// Create a new Map to store country names and official languages

// let countryLanguagesMap = new Map();

// countryLanguagesMap.set('USA', 'English');
// countryLanguagesMap.set('France', 'French');
// countryLanguagesMap.set('Germany', 'German');
// countryLanguagesMap.set('Japan', 'Japanese');
// countryLanguagesMap.set('India', 'Hindi');

// console.log('Country Names:');
// for (let country of countryLanguagesMap.keys()) {
//     console.log(country);
// }

// console.log('\nOfficial Languages:');
// for (let language of countryLanguagesMap.values()) {
//     console.log(language);
// }

//Question 10: Set Remove
//Create a JavaScript program that uses a Set to store the names of colors. Implement a function to remove a specific color from the Set and print the updated set of colors.

// let colorsSet = new Set();
// colorsSet.add('Red');
// colorsSet.add('Green');
// colorsSet.add('Blue');
// colorsSet.add('Yellow');
// colorsSet.add('Purple');
// function removeColor(colorToRemove) {
//   if (colorsSet.has(colorToRemove)) {
//     colorsSet.delete(colorToRemove);
//     console.log(`${colorToRemove} has been removed.`);
//   } else {
//     console.log(`${colorToRemove} was not found in the set.`);
//   }
// }

// console.log('Original Set of Colors:', colorsSet);

// removeColor('Green');

// removeColor('Orange');
// console.log('Updated Set of Colors:', colorsSet);



