import { Component } from "./base-component.js";
import { autobind } from "../decorators/autobind.js";
import * as Validation from "../util/validation.js";
import { projectState } from "../state/project-state.js";

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input')

        this.titleInputElement = this.element.querySelector(
            '#title'
            ) as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector(
            '#description'
            ) as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector(
            '#people'
            ) as HTMLInputElement;
        
        this.configure();
    }

    configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this));
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {};

    private gatherInputUser(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescr = this.descriptionInputElement.value;
        const enteredPeople= this.peopleInputElement.value;

        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true,
        };

        const descrValidatable: Validation.Validatable = {
            value: enteredDescr,
            required: true,
            minLength: 5
        };

        const peopleValidatable: Validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };

        if (
            // enteredTitle.trim().length === 0 || 
            // enteredDescr.trim().length === 0 ||
            // enteredPeople.trim().length === 0
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descrValidatable) ||
            !Validation.validate(peopleValidatable)
            ) {
                alert('Invalid input, please try again');
                return;
            } else {
                return [enteredTitle, enteredDescr, +enteredPeople];
            }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput =  this.gatherInputUser();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
