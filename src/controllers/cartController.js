var app = angular.module('myApp', []);

function CartController($scope, Items) {
    $scope.bill = {};

    $scope.items = Items;
  console.log(Items);

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

app.factory('Items', function() {
  var items = {};
  items.query = function() {
    // In real apps, we'd pull this data from the server...
    return [
      {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
      {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
      {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
    ]; };
  return items;
});