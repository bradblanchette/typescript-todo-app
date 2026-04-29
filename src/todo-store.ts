import { Todo } from './todo';

export class TodoStore {
    private todos: Todo[] = [];
    private nextId: number = 1;
    add(text: string): void {
        this.todos.push({
            id: this.nextId++,
            text: text,
            completed: false
        });
    }
    get(completed: boolean = false): Todo[] {
        return this.todos.filter(todo => todo.completed === completed);
    }
}