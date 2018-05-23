var app = angular.module('todoApp', []);

app.controller('apiController', function ($scope, $http) {

  $scope.enableEdit = [];

  var onReturnComplete = function (response) {
    $scope.todoList = response.data;
    console.log(response.data);
  };

  var onError = function (reason) {
    //TODO: $scope.msg = "Could not fetch the API";
    var data = [
      {
        "ID": "1",
        "BRANCH_ORIGIN": "sample string 1",
        "IS_ON_MASTER": "true",
        "IS_ON_SRV_REMESSA": "true",
        "IS_ON_SRV_RETORNO": "true",
        "TASKS": "sample string 6",
        "DATA_CREATED": "2018-05-19T14:37:20.02",
        "NOTES": "sample string 1"
      },
      {
        "ID": "2",
        "BRANCH_ORIGIN": "exemple 2",
        "IS_ON_MASTER": "true",
        "IS_ON_SRV_REMESSA": "true",
        "IS_ON_SRV_RETORNO": "true",
        "TASKS": "sample string 6",
        "DATA_CREATED": "2018-05-19T14:37:20.02",
        "NOTES": "sample string 2"
      }
    ]


    $scope.todoList = data;


  };

  $http.get("http://localhost:53503/Api/TODO")
    .then(onReturnComplete, onError);


  $scope.editTodo = function (index) {
    var a = this.todo.BRANCH_ORIGIN;
    $scope.enableEdit[index] = true;
  };

  $scope.updateTodo = function (index) {
    $http.put('http://localhost:53503/Api/TODO/'+this.todo.ID,this.todo)
      .success(function (data, status, headers) {
        var serverResponse = data;
        //$scope.ServerResponse = data;
      })
      .error(function (data, status, header, config) {
        var serverResponse  = htmlDecode("Data: " + data +
          "\n\n\n\nstatus: " + status +
          "\n\n\n\nheaders: " + header +
          "\n\n\n\nconfig: " + config);
      })
  };

  $scope.createTodo = function () {

    $http.post("http://localhost:53503/Api/TODO", this.todo)
      .then(function (response) {
        console.log(response.data);

      }).catch(function (response) {
        console.log(response.data);
        //TODO: $scope.error = response.data;
      })
  };
});



// app.controller('TodoListController', function() {
//     var todoList = this;
//     todoList.todos = [
//       {text:'learn AngularJS', done:true},
//       {text:'build an AngularJS app', done:false}];

//     todoList.addTodo = function() {

//       // TODO: I can encapsulate this in one method
//       if(typeof todoList.todoText == 'undefined' || todoList.todoText == ''){
//         alert('Task couldn\'t be empty');
//         return false;
//       }
//       if(todoList.todoText.length < 6 ){
//         alert('Task needs to have more than 5 characters!');
//         return false;
//       }

//       todoList.todos.push({text:todoList.todoText, done:false});
//       todoList.todoText = '';
//     };

//     todoList.remaining = function() {
//       var count = 0;
//       angular.forEach(todoList.todos, function(todo) {
//         count += todo.done ? 0 : 1;
//       });
//       return count;
//     };

//     todoList.archive = function() {
//       if(!confirm("Do you really wish to archive?")){
//         return false;
//       }

//       var oldTodos = todoList.todos;
//       todoList.todos = [];
//       angular.forEach(oldTodos, function(todo) {
//         if (!todo.done) todoList.todos.push(todo);
//       });
//     };
//   });



//   app.controller('myController', function ($scope) {
//     $scope.pastedText = "ssssssssss"; 
// });





// app.directive('pasteExample', function(){
//   var linkFn = function(scope, element, attrs) {

//       element.on('paste', function() {

//           setTimeout(function() {
//               console.log(element.val());
//               scope.pastedText = element.val();
//               scope.$apply();
//           }, 5);

//       });
//   };

//   return {
//       restrict: 'A',
//       link: linkFn
//   };
// });
