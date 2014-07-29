function DeathRayMenuController($scope){
    $scope.menuState = {show: true};

    $scope.toggleMenu = function(){
        $scope.menuState.show = !$scope.menuState.show;
    };
}