var app = angular.module('app', []);

app.factory('todos', function(){
	return {data:
		[
			{text: 'Learn AngularJS : controller', done: false},
			{text: 'Learn AngularJS : view', done: false},
			{text: 'Learn AngularJS : model', done: false},
			{text: 'Learn AngularJS : router', done: false},
			{text: 'Learn AngularJS : provider', done: false},
			{text: 'Learn AngularJS : data binding', done: false},
			{text: 'Learn AngularJS : data filter', done: false},
			{text: 'Learn AngularJS : data scope', done: false},
			{text: 'Learn AngularJS : data module', done: false},
			{text: 'Learn AngularJS : denpendency injector', done: false},
			{text: 'Learn AngularJS : directives', done: false},
			{text: 'Learn AngularJS : promisses', done: false},
			{text: 'Learn AngularJS : services', done: false},
			{text: 'Learn AngularJS : testing', done: false}
		]
	};	
});


function TodoCtrl($scope, todos) {
    $scope.todos = todos.data;
	$scope.completes = [];
    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    }
	
    $scope.addTodo = function() {
        $scope.todos.push( {text: $scope.formTodoText, done: false});
        $scope.formTodoText = "";
    };

    $scope.clearCompleted = function() {
        var todoss = [];
        for (var i = 0; i < $scope.todos.length; i++) {			
            if (!$scope.todos[i].done) {
                todoss.push($scope.todos[i]);
            } else {
				$scope.completes.push($scope.todos[i]);
			}
        }
        $scope.todos = todoss;
		todos.data   = todoss;
    }
}

function SearchToDoCtrl($scope, todos) {	
	$scope.todos = todos.data;
	$scope.searchToDo = function() {
		$scope.todos = todos.data;		
	}
}
