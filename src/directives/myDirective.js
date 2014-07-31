var appModule = angular.module('appModule', []);

appModule.directive('myDirective', function () {
  return {
    link: function(scope, element, attrs, controller){
      element[0].focus();
    }
  }
});