//?1-Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
/*
function myFunction (a, b){
return a + b //In this exercise, 2 variables of this function are added
}

console.log(myFunction(1, 2));
*/

//?2-Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
/*
function myFunction(a, b){
return a === b //In this exercise, the strictly equal is used to identify equal numbers with their equal variable type.
}

console.log(myFunction(1, 2));
console.log(myFunction(2, 2));
*/

//?3-Write a function that takes a value as argument. Return the type of the value.
/*
function myFunction(a) {
    return typeof a; //In this exercise you show the type of value you have in the function.
 }

 console.log(myFunction(1));
 console.log(myFunction('hola'));
 */

//todo: Challenger parte 2

 //?4-Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
/* 
function myFunction(a, n) {
    return a[n - 1]; //In this exercise it is used to access the name from the string.
 }

 console.log(myFunction('abcd',1));
console.log( myFunction('zyxbwpl',5) );
console.log(myFunction('gfedcba',3));
*/

//?5-Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

/*
function myFunction(a) {
    return a.slice(3); //It is obtained with the slice with the positive number the first positions, in this case the first 3
  }

  console.log(myFunction('abcdefg'));
  console.log(myFunction('1234'));
  console.log(myFunction('fgedcba'));
  */

  //TODO:  Challenger part 3

//?6-Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

/*
function myFunction(str) {
  return str.slice(-3); //It is obtained with the slice only with a negative number the last 3 positions in this case.
}

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
*/

//?7-Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

/*
function myFunction(a) {
  return a.slice(0, 3); //It is obtained from the first position. The first 3 positions with the use of slice
}

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
*/

//?8-Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'

/*
function myFunction(a) {
  return a.indexOf('is'); //The indexOf is used to find the exact position of what you want to find. In this case, where is the is located in these words.
}

console.log(myFunction("praise"));
console.log(myFunction("risky"));
console.log(myFunction("paris"));
*/

//?9-Write a function that takes a string (a) as argument. Extract the first half a. Return the result

/*
function myFunction(a) {
  return a.slice(0, a.length / 2); //What to do with the slice. That will look for half of those variables from the first position. As shown in the example here.
}

console.log(myFunction('abcdefgh'));
console.log(myFunction('1234'));
console.log(myFunction('gedcba'));
*/

//?10-Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

/*
function myFunction(a) {
  return a.slice(0, -3); //What slice() does in this exercise is that it removes the last 3 numbers from the first position of the word.
}

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
*/

//TODO: Challenger part 4

//?11-Write a function that takes two numbers (a and b) as argument. Return b percent of a

/*
function myFunction(a, b) {
  return b / 100 * a //This returns the division of b by 100 and will be multiplied by a to get the percentage
}

console.log(myFunction(100,50));
console.log(myFunction(10,1));
console.log(myFunction(500,25));
*/

//?12-Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

/*
function myFunction(a, b, c, d, e, f) {
  return Math.pow(((a + b - c) * d) / e, f); 
  //We use Math.pow to raise it to f and inside the parentheses. 
  //First add to + b and then subtract by c. 
  //Then the outer parentheses multiply it by d. Where this divides it by e and makes the exponent of f.
}

console.log(myFunction(6,5,4,3,2,1));
console.log(myFunction(6,2,1,4,2,3));
console.log(myFunction(2,3,6,4,2,3));
*/

//?13-Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

/*
function myFunction(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
  //This what will do if a is included in b. So it will return b + a or a + b depending on the variables you want to bind to.
}*/

//or

/*
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a //Return with indexOf() the first position of b in a so that if it is strictly equal to -1 
                                             //then it will be a+b and if not, it will be b + a in ternary form.
}

console.log(myFunction('cheese', 'cake'));
console.log(myFunction('lips', 's'));
console.log(myFunction('Java', 'script'));
console.log(myFunction(' think, therefore I am', 'I'));
*/

//TODO: Challenger part 5

//?14-Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

/*
function myFunction(num) {
  return num % 2 === 0; //This code is to see if the number is even or odd, of which if it gives true or if it gives false.
}

console.log(myFunction(10));
console.log(myFunction(-4));
console.log(myFunction(5));
console.log(myFunction(-111));
*/

//?15-Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

/*
function myFunction(a, b) {
  return b.split(a).length - 1; //What will make it search with b will separate the letters that are repeated from a for each word - 1 and will show how many times that word is repeated in the sentence.
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));
*/

//?16-Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.



/* 
function myFunction(a) {
  return Number.isInteger(a); //This is what will make it show a number value, with isInteger it shows if it is an integer it is true and if it is decimal it is false.
}
*/

//!Otra forma

/*
function myFunction(a) {
  return a - Math.floor(a) === 0 //This code is in charge of showing with the value a - the value in decimal to see if it is strictly equal to decimal or integer
}
*/

//!Otra forma

/*
function myFunction(a) {
  return a % 1 === 0; //In this case, it will search for numbers that are divided by 0 or 1.
}
*/

/*
console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))
console.log(myFunction(10.78))
*/

//?17-Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
/*
function myFunction(a, b) {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
  //A conditional is created that if a is less than b then it is divided and if not it is multiplied.
}
*/

//! Otra forma

/*
function myFunction(a, b) {
  return a < b ? a / b : a * b //The same as the previous example but in ternary.
}

console.log(myFunction(10, 100));
console.log(myFunction(90, 45));
console.log(myFunction(8, 20));
console.log(myFunction(2, 0.5));
*/

//?18-Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
/*
function myFunction(a) {
  return Math.round(a * 100) / 100; //Which will make it round the number by 100 and then divide it by 100 to find the decimal up to its second digit
}
*/

//!Other form

/*
function myFunction(a) {
  //return a.toFixed(2); //What will make it look for the number of the decimal but in its second digit.
  //or
  return Number(a.toFixed(2)); //The same as the previous one but at the beginning specifying the value of number.
}


console.log(myFunction(2.12397))
console.log(myFunction(3.136))
console.log(myFunction(1.12397))
console.log(myFunction(26.1379))
*/

//TODO: Challenger part 6

//?19-Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting

/*
function myFunction(a) {
  // we use the split method to divide the number into an array of characters
  let digitos = a.toString().split("");
  // we use the map method to convert each character into a number
  return digitos.map(function(digito) {
    return parseInt(digito);
  });
}
*/

//Another form

/*
function myFunction( a ) {
  const string = a + ''; //First look for the value of the parameter a + the blank space
  const strings = string.split(''); //Then with the split it will divide each space that it has within that array, that is, by each of its values.
  return strings.map(digit => Number(digit)) 
  //What it will do with the map is that it traverses with the arrow function. Each string value, to convert it into a number.
}


console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));
*/

//?20-Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

/*
function myFunction(a) {
  // use the splice() method to remove the first 3 elements
  a.splice(0, 3);
  // return the modified array
  return a;
}
*/

//Another form

/*
function myFunction(a) {
  return a.slice(3); //We use slice to remove the first 3 elements of the function.
}


console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));
*/

//?21-Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

/*
function myFunction(a, b) {
  // merge the two arrays
  let merged = a.concat(b);
  // remove duplicate values
  let unique = Array.from(new Set(merged));
  // sort the array in ascending order
  unique.sort((a, b) => a - b);
  // return the resulting array
  return unique;
}
*/

//Other form

/*
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
//The function takes two arrays "a" and "b", combines it, 
//removes duplicate values and sorts them in ascending order, finally returns the resulting array.


console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
*/

//?22-Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array



