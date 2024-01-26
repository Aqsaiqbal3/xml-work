//=====================================================================================//
// 1. pop:
//    - Create an array of your favorite fruits.
//    - Use the `pop` method to remove the last fruit from the array.
//    - Print the updated array.

 var fruits = ["Apple🍎","Grapes🍇","Cherry🍒","Orange🍊","watermelon🍉"];
 fruits.pop() 
 //Remove the element at last.......
 console.log(fruits);
//=====================================================================================//


//=====================================================================================//
//  2. push:
//    - Create an array of numbers.
//    - Use the `push` method to add a new number to the end of the array.
//    - Print the updated array.

var numbers = [24,34,88,90,55];
numbers.push(40); 
//add element at last
console.log(numbers);
//=====================================================================================//



//=====================================================================================//
// 3. shift:
//    - Create an array of colors.
//    - Use the `shift` method to remove the first color from the array.
//    - Print the updated array.

var colors =["Purple🟪","Orange🟧","Black⬛","Red🟥"];
colors.shift()
//Remove element from start
console.log(colors);
//======================================================================================//



//======================================================================================//
// 4. unshift:
//    - Create an array of programming languages.
//    - Use the `unshift` method to add a new programming language to the beginning of the array.
//    - Print the updated array.
  
var programmingLanguages =["Javascript","Python","Java","C++"];
programmingLanguages.unshift("Ruby");
//Add element from Start
console.log(programmingLanguages);
//======================================================================================//



//======================================================================================//
// 5. slice:
//    - Create an array of days in a week.
//    - Use the `slice` method to create a new array containing only weekdays (Monday to Friday).
//    - Print the new array.

var days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
var sliceArray = days.slice(2,7);
// slice(startingIndex, EndLength)
console.log(sliceArray);
//======================================================================================//



//======================================================================================//
// 6. reverse:
//    - Create an array of characters to represent a word.
//    - Use the `reverse` method to reverse the order of characters.
//    - Print the reversed word.

var word =["A","q","s","a"];
word.reverse();
//reverse the word
console.log(word);
//======================================================================================//



//======================================================================================//
// 7. concat:
//    - Create two arrays, one with fruits and the other with vegetables.
//    - Use the `concat` method to merge the two arrays into a single array.
//    - Print the merged array.

var fruits = ["Apple🍎","Grapes🍇","Cherry🍒","Orange🍊","watermelon🍉"];
var vegetables = ["Potato🥔", "Tomato🍅", "Corn🌽", "Broccoli🥦", "Onion🧅"];
var concatArray = fruits.concat(vegetables);
//merged the two array with the help of concat
console.log(concatArray);
//======================================================================================//


//======================================================================================//

// 8. join:
//    - Create an array of words to form a sentence.
//    - Use the `join` method to join the words into a single string with spaces.
//    - Print the sentence.

var words = ['I','am','currently','working','on','a','new','project'];
var  sentence = words.join(' ');
//Join method convert the word in sentence
console.log(sentence);
//======================================================================================//


//======================================================================================//
// 9. splice:
//    - Create an array of numbers.
//    - Use the `splice` method to remove a specific range of numbers from the array.
//    - Print the updated array.

var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(4,3);
// Use the `splice` method to remove a specific range of numbers from the array.
// splice(startingIndex, DeleteCount, AddElements)
console.log(numbers);
//======================================================================================//

//======================================================================================//

// 10. map:
//     - Create an array of numbers.
//     - Use the `map` method to create a new array where each number is doubled.
//     - Print the new array.

var numbers = [1,2,3,4,5];
var mapArray = numbers.map((num)=> num * 5);
console.log(mapArray);
//======================================================================================//



//======================================================================================//
// 11. filter:
//     - Create an array of ages.
//     - Use the `filter` method to create a new array containing only ages greater than 21.
//     - Print the filtered array.

var ages = [18,22,30,40];
var filterArray = ages.filter((age)=> age > 21);
console.log(filterArray);
//======================================================================================//


//======================================================================================//
// 12. find:
//     - Create an array of objects representing books with title and page count.
//     - Use the `find` method to find a book with more than 300 pages.
//     - Print the details of the found book.

var books = [
    { title: "Book1", pages: 200 },
    { title: "Book2", pages: 190 },
    { title: "Book3", pages: 700 },
    { title: "Book4", pages: 350 },
];

var foundBook = books.find((book) => book.pages > 300);

console.log(foundBook);
//======================================================================================//



//======================================================================================//
// 13. every:
//     - Create an array of exam scores.
//     - Use the `every` method to check if all scores are greater than 60.
//     - Print the result.

var scores=[88,90,70,80];
var examScores = scores.every((score) => score > 60);
console.log("All scores greater than 60: " +examScores);
//======================================================================================//



//======================================================================================//
// 14. some:
//     - Create an array of temperatures.
//     - Use the `some` method to check if at least one temperature is above 30 degrees.
//     - Print the result.

var temperatures = [25, 28, 32, 22, 30];
var someArray= temperatures.some((temperature) => temperature > 30);
console.log("At least one temperature above 30 degrees: " + someArray);
//======================================================================================//



//======================================================================================//
// 15. forEach:
//     - Create an array of names.
//     - Use the `forEach` method to print each name with a greeting, e.g., "Hello, [Name]!"

var names = ["Aqsa","Areeba","Maria","Asra"];
names.forEach((name)=>{
    console.log("Hello, " + name + "!");
});
//======================================================================================//



//======================================================================================//
// 16. includes:
//     - Create an array of cities.
//     - Use the `includes` method to check if a specific city is in the array.
//     - Print the result.

var cities = ["New York", "London", "Turkey", "Paris", "Sydney"];
var specificCity = "London";
var includesArray = cities.includes(specificCity);
console.log("Is " + specificCity + " in the array? "+ includesArray);
//======================================================================================//



//======================================================================================//
// 17. reduce:
//     - Create an array of numbers.
//     - Use the `reduce` method to calculate the sum of all numbers in the array.
//     - Print the sum.

var numbers =[2,7,8,3,4];
var sum = numbers.reduce((accumulator,currentvalue)=> accumulator + currentvalue , 0);
console.log("sum of num is :" + sum);
//======================================================================================//


//======================================================================================//
// 18. indexOf:
//     - Create an array of colors.
//     - Use the `indexOf` method to find the index of a specific color.
//     - Print the index.

var colors = ["Red🟥", "Orange🟧", "Yellow🟨", "Green🟩", "Blue🟦", "Purple🟪"];
var specificColor = "Blue🟦";
var indexOfArray = colors.indexOf(specificColor);
console.log(indexOfArray);
//======================================================================================//


//======================================================================================//
// 19. lastIndexOf:
//     - Create an array with repeated values.
//     - Use the `lastIndexOf` method to find the last index of a specific value.
//     - Print the last index.

var repeatedValues = ["apple🍎", "orange🍊", "banana🍌", "apple🍎", "grape🍇", "apple🍎"];
var specificValue = "apple🍎";
var lastIndexOfValue = repeatedValues.lastIndexOf(specificValue);
console.log("Last index of " + specificValue + ": " + lastIndexOfValue);
//======================================================================================//


//======================================================================================//
// 20. toString:
//     - Create an array of mixed data types (numbers, strings, booleans).
//     - Use the `toString` method to convert the array to a string.
//     - Print the resulting string.


var mixeddataTypes = [25,"hello",33.4,"true","false"];
var toStringArray = mixeddataTypes.toString();
console.log(toStringArray);
//======================================================================================//

