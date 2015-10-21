/**
 * Created by bartek on 13.10.15.
 */

app.factory('getCodes',['$http', function ($http){

    return $http.get('http://localhost/api/codecheck/getCode.php')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);