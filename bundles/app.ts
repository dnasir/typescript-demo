export class Todo {
    public name: string;
    public done: boolean = false;
    
    constructor(name:string) {
        this.name = name;
    }
}
import * as angular from 'angular';
                                    

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
                                                                                   

module todo {
    angular.module('TodoApp', [])
        .controller('TodoCtrl', TodoCtrl);

    angular.bootstrap(document, ['TodoApp']);
}

