function CartController($scope) {
    $scope.bill = {};

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.26},
        {title: 'Paint', quantity: 10, price: 4.33},
        {title: 'Candy', quantity: 12, price: 7.22}
    ];

    $scope.$watch(function(){ //monitors any change
        console.log('here');
        var total = 0;
        $scope.items.forEach(function(item){
            total = total + item.price * item.quantity;
        });

        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    });
}