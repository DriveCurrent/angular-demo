function TodoCtrl($scope) {

    $scope.todos = [
        { text: 'Learn AngularJS', done: false},
        {text: 'Build an app', done: false}
    ];

    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    }

    $scope.addTodo = function() {
        $scope.todos.push( {text: $scope.formTodoText, done: false});
        $scope.formTodoText = "";
    };

    $scope.clearCompleted = function() {
        var todos = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if (!$scope.todos[i].done) {
                todos.push($scope.todos[i]);
            }
        }
        $scope.todos = todos;
        $scope.todos = $scope.filter($scope.todos, function(todo) {
            return !todo.done;
        });
    }
}
