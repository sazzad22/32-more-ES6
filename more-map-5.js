//todo more uses of map method
const names = ['abu dharr', 'ali ibn abu talib', 'khalid ibn walid'];

const namesLengths = names.map(name => name.length);//here the map is giving each element to the callback function. the functin is returning the length of the string elements. Map alway returns in array

console.log(namesLengths); //[9, 17, 16]



//todo using map to get the objects inside the array below. Then we can get just the names of the products of just the prices returned in an array

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);


console.log(productNames); //['water bottle', 'mobile phone', 'smart watch', 'sticky note', 'water glass']


//todo forEach() method
// forEach() is same as map() but forEach() does not return anything. Meaning the callback function of forEach won't return anything.
products.forEach(product => console.log(product.color))
/* yellow

2
black

pink

white */
