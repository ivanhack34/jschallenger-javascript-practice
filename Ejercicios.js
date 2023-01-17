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

//?11-Write a function that takes two numbers (a and b) as argument. Return b percent of a
