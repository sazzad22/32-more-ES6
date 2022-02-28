//todo inheritance - this is way to create class as an extended part of the parent class . In this inherited class we can inherit properites from the parent class.

//parent class
class teamMember {

    name;
    address = 'BD';

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

}

//to write a child class,one must write the keyword class ,then child class name , extends , parent class name
class support extends teamMember{
    
    supportTime;
    designation = 'support Web Dev';

    constructor(name, address, time) {
        super(name, address);
        this.supportTime = time;
    }

}

const aamit = new support('aamit','bd',20);
console.log(aamit); //{name: 'aamit', address: 'bd', supportTime: 20, designation: 'support Web Dev'}

//another child class
class neptune extends teamMember{
    codeEditor;

    constructor(name, address,editor) {
        super( name, address);
        this.codeEditor = editor;
    }

    releaseApp(version) {
        console.log
    }

}

const jabir = new neptune('neptuneName','bdNeptune','jabir');
console.log(jabir);


//another one
class user {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return { name: this.name, email: this.email };
    }

    login() {
        return 'You are now logged in';
    }

}

//child class
class subAdmin extends user{
    getAdminInfo() {
        return 'I am a sub admin';
    }
}

const tommy = new subAdmin();
console.log(tommy.getAdminInfo()); //I am a sub admin
console.log(tommy.getInfo()); //{name: undefined, email: undefined} 
//the method  getInfo is only mentioned in the user class, still we are able to access it through tom, the child class