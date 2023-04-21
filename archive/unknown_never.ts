let userInput: unknown; // unknown Type
let userName: string;

userInput = 5;
userInput = 'Artem';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {   // never return function
    throw {message: message, errorCode: code};
}


generateError('An error occurred!', 500);