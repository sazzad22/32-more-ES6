//declaring variable using the name of the porperty name
const myobject = {
  x: 2,
  y: 4,
  z: 1,
};
const { x, y, z } = myobject;

console.log(x, y, z); //2 4 1

//destructuring Array
const [p, q] = [2, 2, 3, 1, 6]; //to destruct array one must create structure like an array after const . In case of object one must create structure like object.

//chaining
const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

console.log(company?.backend?.tech?.third); //If the mentioned porperty does not exist in the object normally the code will show error message. Putting the '?' mark - no error - only will say undefined in the console.
