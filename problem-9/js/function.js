//1. Create a function that takes an array as input and returns the sum of all its elements.
//creat a funcation 
function Arry_sum(arry) {
    // create a variable for getting return value set equal to 0
    let addSum = 0;
    // add loop in function for get result and adding details for getting sum
    for (let i = 0; i < arry.length; i++) {
        //add whole arry data in addSum variable 
        addSum += arry[i]
    }

    // put return for getting result
    return addSum;
}

// store arry value in variable
let arrValue = [1, 2, 3, 4, 5];
//pass argument in Arry-Sum  and store arry values
let resultSum = Arry_sum(arrValue);
// the end console the data for result
console.log(resultSum); 

// Write a function that reverses a given string. For example, "hello" should become "olleh".
//cteate a function
function reverseString(str) {
    // in return 1st convet to arry and 2st reverse the content(content ko ulta kr dia) aand at the end convet to string  
    return str.split('').reverse().join('');
}
//store the orignal value in variable
let orignalString = "hello"
//store the orignal value in funcation
let reversesString = reverseString(orignalString);
// after storing funcation and orignal value in singnal console the code
console.log(reversesString);

//3. Implement a function that takes a sentence as input and returns the number of words in it.
//creat a function
function countWords(sentence) {
    //put return in argument for converting the value into arry and then put method for find
    return sentence.split(" ").length
}

//store the value in countword and call the countword and console the result

console.log(countWords("This is a Sentence"));

//Create a function that takes an array of numbers as input and returns a new array with only the even numbers from the original array
//create a function
function filterNumbers(numbers) {
    // put return and put filter method which will be creat a new arry after completing program and then we tell the program find the number wchich divideable on 2 
    return numbers.filter(number => number % 2 === 0);

}
//store the real value in arry 
let orignalNumber = [1, 2, 3, 4, 5, 6];
//store the real value in function
let getEvennumber = filterNumbers(orignalNumber);
//call  the function in console
console.log(getEvennumber);

//Write a program that checks if a given number is prime or not.
//create a funcation and pass parameter number
function isPrimenumber(number) {
    // put the if statment if i is equal to 0
    if (i <= 0) {
        // so return the false
        return false;
    }

    //use the for loop the loop let start the i from 2 and take saqure root of every number

    for (let i = 2; i <= Math.sqrt(number); i++) {
        // after runing the loop if modules is equal to 0 return false
        if (number % i === 0) {
            // in this the above statment will be excute
            return false;
        }

        //otherwise if modules is not equal to 0 return ture
        return true;
    }
    // let the variable and use prompt technique prompt technique is allow the user to entering the any number
    let afterLoop = prompt("Enter a number");
    // again let the variable use the pareInt technique that is covert the afterloop variable to integer and store in variable
    let afterEntering = parseInt(afterLoop);
    // use the if technique if isPrimenumber is equal to after Entering variable run the console.log afterEntering is prime number
    if (isPrimenumber(afterEntering)) {
        console.log(`${afterEntering} is a prime number`);
    } else {
        console.log(`${afterEntering} is not prime number`);
    }
 //// use the else technique eles isPrimenumber is equal to after Entering variable run the console.log afterEntering is not prime number
}

//6. Implement a function that capitalizes the first letter of each word in a sentence. For example, "hello world" should become "Hello World".

//create funcation pass the parameter
function capitalizeFirstWord(sentence) {
    // Convert string to array
    const words = sentence.split(' ');

    // Use the map method to apply the arrow function on each word
    // Use charAt(0) method to get the first letter and toUpperCase method to convert it to uppercase
    // Use slice method to concatenate the rest of the word starting from index 1
    const convertCapitalize = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Convert the array back to a string
    const afterCapitalizing = convertCapitalize.join(' ');

    // Return the result
    return afterCapitalizing;
}

// Create a variable and store the value in it
const originalWord = "hello world";

// Store the function result in a variable
const newResult = capitalizeFirstWord(originalWord);

// Console log the result
console.log(newResult);

//7. Create a function that finds the maximum and minimum numbers in an array and returns them as an object.
//create the funcation
function findIng(numbers) {
    //use the if define that if length of arry is equal to 0 
    if(numbers.length === 0) {
        //so return the null in result
        return null;
    }

    // create the variable and intialize the the arry for index 0

    let min = [0];
    let max = [0];
// create the  loop let i is equal to 1 start from 1 and check the arry elements if any element has is graterthan from max and lessthen from min the loop will update that
    for(i = 1; i < numbers.length; i++) {

        // that if  is check that if any element is lessthan min
        if(numbers[i] < min) {
            // if has any number that will update and equal to min
            min = numbers[i];
        } 
        // that if  is check that if any element is greaterthan max

        if(numbers[i] > max) {
              // if has any number that will update and equal to max
            max = numbers[i];
        } 
    }

    // reture the result of min and max

    return { min, max};

}

//store the value in varible

const originalNumbers = [1, 2, 3, 6, 8, 0, 7];

//store the funcation and value in variable
const final = findIng(originalNumbers);

//console the final result

console.log(final);

//Write a program that calculates the factorial of a given number.
//creat function
function findFictorial(number) {
    // if number is equal is 0 or number is equal 1 in both condition 
    if( number === 0 || number === 1 ) {
        //return the result 1
        return 1;
        //else return in result number will the multiplying with value and value factor until get the -1 value
    } else {
        return number * findFictorial(number -1)
    }
}

// store the real value in variable
const realNumber = [5];
// store the funcation and value in variable
const realresult = findFictorial(realNumber);
// at the end console the reslt
console.log(realresult);
//Implement a function that checks if two strings are anagrams (contain the same characters in a different order).

//create a funcation 
function areArrgment(str1, str2) {
    // store the value in variable and then put the replace that will be remove all the space and tolowercase will conver the all elements to lowercase 
    const formatedString1 = str1.replace(/\s/g, '').toLowerCase();
    const formatedString2 = str2.replace(/\s/g, '').toLowerCase();
// put the if condition if string 1 is not equal to string 2
    if(formatedString1.length !== formatedString2) {
        // give result false
        return false;
    }

// store the value in variable and put the split method that will be convert arry all elements and then use sort method that will be give sequence of all element and then convert the arry to string via join method
    const storedString1 = formatedString1.split(' ').sort().join();
    const storedString2 = formatedString2.split(' ').sort().join();
//return the result 
    return storedString1 === storedString2;


}

//store the value in variable

const string1 = "listen"
const string2 = "silent"

// run the if condition if the both string is equal console the value
 
if(areArrgment (string1, string2)) {
    console.log (`${string1} and ${string2} are arguments`)

    // else console the else value
} else {
    console.log(`${string1} and ${string2} are not arguments`)
}

//Create a program that generates a random password with a specified length and includes a mix of letters, numbers, and special characters.

function createRandompassword(length) {
    let characters = "245r945767178afdffjkfekmamf??.@!sxcvccbndygnnuykij;'jfhgsadgvg;oo[]f{';()";
    let password = ""

    for(let i = 0; i < length; i++) {
        const indexrandom = Math.floor(Math.random() * characters.length);
        password += characters[indexrandom];
    }   

    return password
}

let charsetLength = 12;
let passwordResult = createRandompassword(charsetLength);

console.log("Random Password:", passwordResult);


//Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

// function isnumber(number) {
//     // put the if statment if i is equal to 0
//     if (i <= 0) {
//         // so return the false
//         return false;
//     }

//     //use the for loop the loop let start the i from 2 and take saqure root of every number

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         // after runing the loop if modules is equal to 0 return false
//         if (number % i === 0) {
//             // in this the above statment will be excute
//             return false;
//         }

//         //otherwise if modules is not equal to 0 return ture
//         return true;
//     }
//     // let the variable and use prompt technique prompt technique is allow the user to entering the any number
//     let afteroop = prompt("Enter a number");
//     // again let the variable use the pareInt technique that is covert the afterloop variable to integer and store in variable
//     let afterstering = parseInt(afteroop);
//     // use the if technique if isPrimenumber is equal to after Entering variable run the console.log afterEntering is prime number
//     if (isnumber(afteroop)) {
//         console.log(`${afterstering} is a prime number`);
//     } else {
//         console.log(`${afterstering} is not prime number`);
//     }
//  //// use the else technique eles isPrimenumber is equal to after Entering variable run the console.log afterEntering is not prime number
// }


//////////////////////////////////////

