function TodoCtrl($scope) {
    $scope.totalTodos = 4;

    $scope.todos = [
        { text: 'Learn AngularJS', done: false},
        {text: 'Build an app', done: false}
    ];
}
