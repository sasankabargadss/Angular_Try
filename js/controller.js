
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view



    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController',function($scope,$routeParams) {

    $scope.user={};
    $scope.doSomeAction = function(x,y,a,b,c) {


        var user= x+"="+y+"="+a+"="+b+"="+c+"";





        console.log(user);


        console.log("kjjhjhjhjhjhjhjh");
        //$location.url('http://localhost:63342/newTest/index.html#/')

        window.location="http://localhost:63342/newTest/index.html#/contact/"+user;

    };
});

scotchApp.controller('contactController', function($scope,$routeParams) {

    var test=$routeParams.user;
    $scope.firstName=test.split("=")[0];
    $scope.LastName=test.split("=")[1];
    $scope.email=test.split("=")[2];
    $scope.password=test.split("=")[3];
    $scope.Confirmpassword=test.split("=")[4];
    // var lastName=test.concat("=");

    console.log("jhfjhdfjdhfdhfh@@@@@@@@@@@");
    console.log($scope.LastName);

    //$scope.rootValue=$routeParams.user;





});
