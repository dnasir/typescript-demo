import {Todo} from '../models/todo';

export class TodoCtrl {
    private todos: Array<Todo>;
    private newTodo: Todo;

    constructor() {
        this.todos = new Array<Todo>();
        this.newTodo = new Todo('');
    }

    addTodo() {
        if (!this.newTodo.name.length) return;

        this.todos.push(this.newTodo);
        this.newTodo = new Todo('');
    }

    removeTodo(todoItem: Todo) {
        this.todos.splice(this.todos.indexOf(todoItem), 1);
    }
}