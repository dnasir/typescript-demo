System.register(['angular'], function(exports_1) {
    var angular;
    var Todo, TodoCtrl, todo;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            }],
        execute: function() {
            Todo = (function () {
                function Todo(name) {
                    this.done = false;
                    this.name = name;
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
            TodoCtrl = (function () {
                function TodoCtrl() {
                    this.todos = new Array();
                    this.newTodo = new Todo('');
                }
                TodoCtrl.prototype.addTodo = function () {
                    if (!this.newTodo.name.length)
                        return;
                    this.todos.push(this.newTodo);
                    this.newTodo = new Todo('');
                };
                TodoCtrl.prototype.removeTodo = function (todoItem) {
                    this.todos.splice(this.todos.indexOf(todoItem), 1);
                };
                return TodoCtrl;
            })();
            exports_1("TodoCtrl", TodoCtrl);
            (function (todo) {
                angular.module('TodoApp', [])
                    .controller('TodoCtrl', TodoCtrl);
                angular.bootstrap(document, ['TodoApp']);
            })(todo || (todo = {}));
        }
    }
});
