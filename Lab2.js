import { GridFSBucketReadStream } from "mongodb";

/* Using ES6 syntax, write a function that will get the difference between a given number and 13, 
if the number is greater than 13 return double the absolute difference */

function differenceBetweenThirteen(num) {
  if (num < 13) {
    var answr = 13 - num;
    console.log(answr);
  } else {
    var answr = num - 13;
    console.log(2 * answr); 
  }
}

/*Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
and for..of*/

function gretter(myArray) {
    var greetText = 'Hello';
    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }

 }
 gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

//ES6 Syntax: 
gretter = (myArray) => {
  let greetText = 'Hello';
  for (let index of myArray) {
      console.log(`${greetText}, ${index}`);
  }

}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

//array.proto.map Exercise 3

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map (x => x.charAt(0).toUpperCase() + x.slice(1)); 
console.log(capitalizedColors)

//Exercise #4

var values = [1, 6, 34, 30, 20, 5];
const filterLessThan20 = values.filter(values => values < 20);
console.log(filterLessThan20)



 
 