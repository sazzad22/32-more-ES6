// todo filter() method and find() method

const numbers = [1, 2, 3, 4, 5, 6, 7];

const smallNumbers = numbers.filter(number => number <= 5); //filter will get all elements in an array,pass them through the callback function,will return if the condition of the callback function is met.

//filter() method returns an array

console.log(smallNumbers);//[1, 2, 3, 4, 5]

const numberFive = numbers.filter(number => number == 0);

console.log(numberFive);//[] if it cant find element according to the condition, it returns an empty array

// filter method on array of objects.
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price < 10);

console.log(expensive); //[ { name: 'water glass', price: 3, color: 'white' } ]

//in case of find() method it will return the first element which meets the callback function condition. It returns as an element not an array.
const white = products.find(product => product.color === 'white');

console.log(white); //{name: 'water glass', price: 3, color: 'white'}

