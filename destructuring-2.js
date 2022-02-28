const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };

//todo Putting the value of the property into a variable.It is called destructuring of an object.

// normal / old way to do tha
const fishId = fish.id;
const fishName = fish.name;

console.log(fishId, fishName);//58 King Hilsha


// Shortcut way to destructuring
const { id, name, address } = fish;

console.log(id, name, address);//58 King Hilsha Chandpur


// destructuring on nested object.
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website-development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// old way
const companyEmployee = company.web.employee;

console.log(companyEmployee);//22

//shortcut
const { work, framework } = company.web;//the property name should be mentioned insisde the curly braces in order to get those exact properties;

console.log(work, framework);//website-development 22

const { first, second, third:c } = company.web.tech;

console.log(first, second, c);//html css js
