import { TodoStore } from './todo-store.js';

export class DomControl {
    private container: HTMLElement;
    private store: TodoStore;
    constructor(containerId: string) {
        const element = document.getElementById(containerId);
        if(!element) {
            throw new Error(`Element with ID ${containerId} cannot be found.`);
        }
        this.container = element;
        this.store = new TodoStore();
    }
    createElement(tag: string, content: string, appendToId: string, id?: string, classList?: string): void {
        const element = document.createElement(tag);
        element.textContent = content;
        if(id) {
            element.setAttribute('id', id);
        }
        if(classList)
        {
            element.classList.add(classList);
        }
        if(this.domElementExists(appendToId)) {
            document.getElementById(appendToId)?.appendChild(element);
        }
        else {
            throw new Error(`Element with ID ${appendToId} cannot be found.`);
        }
    }
    domElementExists(id: string) {
        const element = document.getElementById(id);
        if(!element) {
            return false;
        }
        return true;
    }
}