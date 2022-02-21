//todo class .
// class holo same structure er object create korar way. all class has constructor inside it.

class support {
  //below is the properties of the intended object
  name;
  designation = "Support Web Dev";

  //here is the constructor function's job is to assign the values of properties of the intended object.This value is passed in the constructor function when the object is declared.
  constructor(name) {
    this.name = name;
  }

    
  //other functions can also be mentioned in a class. Though they are mentioned only with their fucntion name. the 'function' keyword is not used.
  startSession() {
    console.log(this.name, "start a session");
  }
}

//the object
const myObject = new support();

console.log(myObject); //{name: undefined, designation: 'Support Web Dev'}

const anotherObject = new support("techno");

console.log(anotherObject); //{name: 'techno', designation: 'Support Web Dev'}

anotherObject.startSession(); //techno start a session

// todo another class

class prophet {
  name;
  tittle = "khalilullah";
  address;

  constructor(name, tittle, address) {
    this.name = name;
    this.tittle = tittle;
    this.address = address;
  }
}

const ibrahim = new prophet("ibrahim", "father", "makkah");

console.log(ibrahim);

