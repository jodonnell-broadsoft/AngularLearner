/**
 * Created by jonathanodonnell on 2014-07-29.
 */

function RestaurantTableController($scope){
    $scope.directory = [{name: 'foo', cuisine: 'meat'},
        {name: 'bar', cuisine: 'eggs'},
        {name: 'par', cuisine: 'chicken'}]

    $scope.selectRestaurant = function(row){
        $scope.selectedRow = row;
    }
}
