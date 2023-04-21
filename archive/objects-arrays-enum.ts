// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string;
//     age: number;
//     address: object;
//     hobbies: string[];
//     role: [number,string];
// } = {
//     name: 'Artem',
//     age: 34,
//     address: {                  // Nested Object (object in object)
//         country: 'Ukraine',
//         city: 'Kyiv',
//         street: 'Serzha Lyfarya'
//     },
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'SDET']  // Tuple - fixed length array with certain types
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}; // 0, 1, 2 // or ADMIN = 5, 6, 7 

const person = {
    name: 'Artem',
    age: 34,
    address: {                  
        country: 'Ukraine',
        city: 'Kyiv',
        street: 'Serzha Lyfarya'
    },
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [1, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}