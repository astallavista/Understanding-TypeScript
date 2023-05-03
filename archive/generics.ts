// const names: Array<string> = [];  // Generic type - we specify what type of data should 
//                                   // be in the Array. Could contain Union type i.e. 'string | number'
// // for string it is possible to use names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout (() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     //data.split(' ');
// })

function merge<T extends object, U extends object> (objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name: 'Artem'}, {age: 34}));
const mergeObj = merge({name: 'Artem', hobbies: ['Cooking', 'Programming']}, {age: 34});
console.log(mergeObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { // KEYOF Constraint
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Artem', age: 34}, 'name'));

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Artem');
textStorage.addItem('SDET');
textStorage.addItem('Ciga');
textStorage.removeItem('Ciga');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);

// const objectStorage = new DataStorage<object>();
// const artemObj = {name: 'Artem', salary: '10000 US per month'};
// const pedrObj = {name: 'Pedritto'};
// objectStorage.addItem(artemObj);
// objectStorage.addItem(pedrObj);
// objectStorage.removeItem(pedrObj);
// console.log(objectStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
    ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};   // Generic Utility type
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Artem', 'Pedro']; // Generic Utility type
// names.push('Manu');
// names.pop()
