/**
 * Created by bartek on 15.10.15.
 */

app.factory('submitPage',[function() {

    return {
        fn: function (url, callback) {
            //$http({
            //    method : 'POST',
            //    url : 'http://localhost/api/codecheck/submitPage.php',
            //    dataType : 'text',
            //    data : {
            //        url : url
            //    }
            //})
            //    .success(function (data) {
            //        callback(data);
            //    })
            //    .error(function (err) {
            //        callback(err);
            //    })

            $.ajax('http://localhost/api/codecheck/submitPage.php', {
                method : 'POST',
                dataType : 'text',
                data : { url : url },
                success : function(msg) {
                    callback(msg);
                },
                error : function(x,y,z) {
                    console.log(x);
                    console.log(y);
                    console.log(z);
                }
            });
        }
    }

}]);