const myArray = [1, 2, 3, 4];

//the below method is used to get element and put them through a fuction through a for of loop

// function doubleIt(number) {
//     return number * 2;

// }

//or
const doubleIt = (number) => number * 2;

const doubledArray = [];

for (let number of myArray) {
    const result = doubleIt(number);
    doubledArray.push(result);
}

console.log(doubledArray);//[2, 4, 6, 8]

// While working with react , for loop is not used that much for getting elements from array. Instead 'Array.map()' method is used more often.

//map() method  will get all the elements from an array and if a fuction is mentioned inside it , the functin will work with those elements.

//Also the result will be stored in an array.

const doubledThruMap = myArray.map(doubleIt);

console.log(doubledThruMap);//[2, 4, 6, 8]

//The whole function can also be written inside map() method, instead of just the name.

const squaredArray = myArray.map(num => num * num);

console.log(squaredArray);//[1, 4, 9, 16]

const copiedArray = myArray.map();

console.log(copiedArray);//