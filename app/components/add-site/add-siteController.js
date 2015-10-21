/**
 * Created by bartek on 15.10.15.
 */

app.controller('add-siteController',['$scope','submitPage', function ($scope,submitPage) {

        $scope.addSite = function() {
            var regex = new RegExp('http://');

            if ( !(regex.test($scope.siteUrl)) ) {
                $scope.siteUrl = 'http://' + $scope.siteUrl;
            }

            submitPage.fn($scope.siteUrl, function (data) {
                console.log(data);
            });

        }

}]);