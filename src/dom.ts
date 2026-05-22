import { TodoStore } from './todo-store';

export class DomControl {
    private container: HTMLElement;
    constructor(containerId: string) {
        const element = document.getElementById(containerId);
        if(!element) {
            throw new Error(`Element with ID ${containerId} cannot be found.`);
        }
        this.container = element;
    }
    domElementExists(id: string) {
        const element = document.getElementById(id);
        if(!element) {
            return false;
        }
        return true;
    }
}