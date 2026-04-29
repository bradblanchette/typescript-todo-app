import { Todo } from './todo';

export class TodoStore {
    private todos: Todo[] = [];
    private nextId: number = 1;
}