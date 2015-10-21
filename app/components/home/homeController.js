/**
 * Created by bartek on 13.10.15.
 */

app.controller('homeController',['$scope','getCodes', function ($scope, getCodes){

    getCodes.success(function(data){
        $scope.pages = data;
        var element = document.getElementById("loading");
        element.parentNode.removeChild(element);
    });

}]);