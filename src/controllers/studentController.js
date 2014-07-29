var students = [{name: 'Bill', id: '1'},
    {name: 'Jon', id: '2'},
    {name: 'Nick', id: '3'}];

function StudentController($scope){
    $scope.students = students;

    $scope.insertTom = function () {
        console.log('Tom');
        $scope.students.splice(1,0, {name: 'Tom', id: '4'});
    };
}
