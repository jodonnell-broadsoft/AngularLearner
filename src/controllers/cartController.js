var app = angular.module('myApp', []);

function CartController($scope, Items) {
    $scope.bill = {};

    $scope.items = Items;
    console.log(Items);

    $scope.$watch(function(){ //monitors any change
        console.log('here');
        var total = 0;
        $scope.items.forEach(function(item){
            total = item.price;
        });

        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    });
}
