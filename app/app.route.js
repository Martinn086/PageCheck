/**
 * Created by bartek on 13.10.15.
 */

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller : 'homeController',
            templateUrl : 'app/components/home/homeView.html'
        })
        .when('/add-site', {
            controller : 'add-siteController',
            templateUrl : 'app/components/add-site/add-siteView.html'
        })
        .otherwise({
            redirectTo : '/'
        });
});