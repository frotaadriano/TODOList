angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    todoList.addTodo = function() {
      
      // TODO: I can encapsulate this in one method
      if(typeof todoList.todoText == 'undefined' || todoList.todoText == ''){
        alert('Task couldn\'t be empty');
        return false;
      }
      if(todoList.todoText.length < 6 ){
        alert('Task needs to have more than 5 characters!');
        return false;
      }

      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      if(!confirm("Do you really wish to archive?")){
        return false;
      }
     
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });