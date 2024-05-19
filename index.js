// All questions should be printed to your Browser's console using console.log()

console.log('Question 1')
/*
1. Create an array called ages that contains the following values: 
3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last 
    element of the array.
        - Do not use numbers to reference the last element, find it programmatically.
        - ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
    (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.
*/

// Create ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)

console.log('a.')
// a. Programmatically subtract value of first element from value of last element in array: 93 - 3
// Used .length - 1 to reference last element.
let differenceAgesLastFirst = ages[ages.length - 1] - ages[0] 
console.log('Age difference: ' + differenceAgesLastFirst)

console.log('b.')
// b. Adding new age to the array.
ages.push(34)
console.log(ages)

let differenceAgesLastFirstDynamic = ages[ages.length - 1] - ages[0] 
console.log('Age difference: ' + differenceAgesLastFirstDynamic)

console.log('c.')
// c. Using loop to calculate average age.
// Need ages to be added up to a total and then divide by ages.length.
let agesTotal = 0
for (let i = 0; i < ages.length; i++) {
    agesTotal += ages[i]
}

let aveAge = agesTotal / ages.length
console.log('Average age: ' + aveAge)


console.log('Question 2')
/*
2. Create an array called names that contains the following values: 
'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, 
    separated by spaces.
*/

// Create names array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)
console.log(names.length)

console.log('a.')
// a. Using loop to calculate average number of letters per name.
let totalLettersNames = 0
for (let i = 0; i < names.length; i++) {
    totalLettersNames += names[i].length
}

let aveLettersNames = totalLettersNames / names.length
console.log('Average number of letters per name: ' + aveLettersNames)

console.log('b.')
// b. Using loop to concatenate all names.
let concatenatedNames = ''
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' '
}
console.log(concatenatedNames)


/*
3. How do you access the last element of any array?
At index: arrayName.length - 1
*/


/*
4. How do you access the first element of any array?
At index: 0
array[0]
*/


console.log('Question 5')
/*
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names 
array and add the length of each name to the nameLengths array.

For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/

// Create a new array called nameLengths.
let nameLengths = []

// Using a for loop to add the length of each name to nameLengths array.
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths)


console.log('Question 6')
/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements 
in the array.
*/

// Create a sum variable
let sum = 0

// Using a for loop to calculate the sum of all the elements in the array.
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]
}
console.log('Sum: ' + sum)


console.log('Question 7')
/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word 
concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function 
to return 'HelloHelloHello').
*/

// Create a function with two parameters, word and n.
function repeatWord(word, n) {
    let result = ''     // result is a string, repeating n times using a for loop
    for (let i = 0; i < n; i++) {
        result += word
    }
    return result
}

console.log(repeatWord('Hello', 3))


console.log('Question 8')
/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.
*/

// Create fullName function with two parameters, firstName and lastName.
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(fullName('Va', 'Yang'))


console.log('Question 9')
/*
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the 
array is greater than 100.
*/

// Create a function named sumGreaterThan100 that takes an array of numbers.
function sumGreaterThan100(numbers) {
    let sum = 0     // Starting at 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum > 100
}

// Test
console.log(sumGreaterThan100([25, 50, 30]))
console.log(sumGreaterThan100([10, 20, 30]))


console.log('Question 10')
/*
10. Write a function that takes an array of numbers and returns the average of all the elements in 
the array.
*/

// Create average function that takes an array of numbers.
function average(numbers) { 
    let sum = 0     // Starting at 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length
} 

// Test
console.log('Average: ' + average([25, 50, 30]))
console.log('Average: ' + average([10, 20, 30]))


console.log('Question 11')
/*
11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
in the first array is greater than the average of the elements in the second array.
*/

// Create a function that compares the average of the elements in array 1 and array 2.
function compareAve(array1, array2) {
    // Array1 average
    let sumArray1 = 0
    for (let i = 0; i < array1.length; i++) {
        sumArray1 += array1[i]
    }
    const aveArray1 = sumArray1 / array1.length

    // Array2 average
    let sumArray2 = 0
    for (let i = 0; i < array2.length; i++) {
        sumArray2 += array2[i]
    }
    const aveArray2 = sumArray2 / array2.length

    // Compare array1 average to array2 average
    return aveArray1 > aveArray2     // Returns true if average of array1 > average of array2
}

// Test
console.log('Average array1 > average array2: ' + compareAve([1, 2, 3, 4], [1, 1, 1, 1]))
console.log('Average array1 > average array2: ' + compareAve([1, 1, 1, 1], [1, 2, 3, 4]))


console.log('Question 12')
/*
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

// Create function willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50
}

// Test
console.log('Buy drink: ' + willBuyDrink(false, 20))
console.log('Buy drink: ' + willBuyDrink(true, 20))
console.log('Buy drink: ' + willBuyDrink(true, 1))


console.log('Question 13')
/*
13. Create a function of your own that solves a problem. In comments, write what the function does 
and why you created it.
*/

/*
I will be creating a function to solve a problem of whether to save money or not to save 
money depending on income and expenses. If income is greater than expenses, I will save money.
If income is less than expenses, I will not save money.

I am creating this because savings is an important part of financial well-being.
*/

function saveMoney(income, expenses) {
    if (income > expenses) {
        return 'I will save money'
    } else {
        return 'I will not save money'
    }
}

console.log(saveMoney(2000, 1500))
console.log(saveMoney(1400, 1500))