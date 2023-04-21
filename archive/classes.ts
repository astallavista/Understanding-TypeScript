abstract class Department {
    static fiscalYear = 2023;
    // name: string;   // public property is by default
    // private id: string;
    // private employees: string[] = [];   // private only accessible inside the class 
    protected employees: string[] = []; // we can use it in inheritance classes

    constructor (protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;    //logic of the method
        // console.log(`Department: (${this.id}): ${this.name}`);
    

    addEmployee(employee: string) {
        // this.id = 008;  -  error because id is readonly
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class AccountingDep extends Department {
    private lastReport: string;
    private static instance: AccountingDep; 

    get mostRecentReport() {       /// getter - read a property
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
        
    }

    set mostRecentReport(value: string) {    /// setter  - set a property
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }
    
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDep.instance) {
            return this.instance;
        }
        this.instance = new AccountingDep('001', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

class itDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');  // super calls first, than "this"
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new itDepartment('005',['Artem', 'Pedro']);

it.addEmployee('Artem');  // private property
it.addEmployee('Pedro');

// accounting.employees[2] = 'Anna';   -- not good! public property

it.describe();
it.printEmployeeInfo();

console.log(it);

// const accounting = new AccountingDep('007', []);
const accounting = AccountingDep.getInstance();
console.log(accounting);

accounting.mostRecentReport = 'Hallo';

accounting.addEmployee('Anna');
accounting.addEmployee('Olga');
accounting.addEmployee('Max');

accounting.describe();

accounting.addReport('Something went wrong');
console.log(accounting.mostRecentReport);
console.log(accounting);

accounting.printReports();


// const accountingCopy = { name: 'S', describe: accounting.describe };

// accountingCopy.describe();