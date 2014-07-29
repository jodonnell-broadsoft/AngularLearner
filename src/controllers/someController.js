function SomeController($scope){
    $scope.funding = {startingEstimate: 10};

    computeNeeded = function(){
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };

    $scope.$watch('funding.startingEstimate', computeNeeded);
}