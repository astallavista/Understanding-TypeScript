// const userName = "Artem";
// // userName = "Ar";

// let age = 34;
// age = 29; 

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// const add = (a: number, b: number = 1) =>  a + b; // default b parameter - should be last in the list

// // console.log(add(2, 5));

// const printOutPut: (a: string | number) => void = output => console.log(output);

// const button =document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutPut(add(5)); 

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

// console.log(hobbies, activeHobbies);

const person = {
    firstName: 'Artem',
    age: 34
};

const copiedPerson = { ...person };

// 

const add = (... numbers: number[]) => {    // ... Rest parameter that accept as many parameters
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log (hobbies, hobby1, hobby2)

const {firstName: userName, age} = person;

console.log(userName, person); 