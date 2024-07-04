// Create two arrays of numbers called numbers1 and numbers2
let numbers1 = [1,2,3,4,5,6];
let numbers2 = [7,8,9,10,11,12];

// Use spread operator to create an array called numbers that combines elements of both arrays above
let numbers = [...numbers1, ...numbers2];

// Define an arrow function called square that accepts a number as an argument and returns the square of the number
let square = (number) => (number**2);

// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
let squares = numbers.map((numbers) => square(numbers));

// Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
let isEven = (number) => {
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

// Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
let evenSquares = squares.filter((number) => isEven(number));

// Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [firstEvenSquare,secondEvenSquare, ...rest] = evenSquares;

// Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`Original Numbers Array is: ${numbers}\n Squares Array is: ${squares}\n evenSquares array is: ${evenSquares}\n firstEvenSquare is: ${firstEvenSquare}\n and the 2nd is ${secondEvenSquare}`)