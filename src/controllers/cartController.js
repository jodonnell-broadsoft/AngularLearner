function CartController($scope) {
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.26},
        {title: 'Paint', quantity: 10, price: 4.33},
        {title: 'Candy', quantity: 12, price: 7.22}
    ];

    $scope.totalCart = function(){
        var total = 0;
        $scope.items.forEach(function(item){
            total = total + item.price * item.quantity;
        });

        return total;
    };

    $scope.subtotal = function(){
        return $scope.totalCart() - $scope.discount;
    }

    function calculateDiscount(newValue, oldValue, scope){
        $scope.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
}