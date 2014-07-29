function CartController($scope) {
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.26},
        {title: 'Paint', quantity: 10, price: 4.33},
        {title: 'Candy', quantity: 12, price: 7.22}
    ];

    $scope.remove = function(index){
        $scope.items.splice(index, 1);
    }
}