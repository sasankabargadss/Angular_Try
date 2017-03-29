
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view



    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.service('Share', function () {
    this.Items = function () {
        // if we want can get data from database
        value = {firstName: '', LastName: '', email: '', password: '', confirmPassword: ''}
    };
    return this;
});

scotchApp.controller('aboutController', function ($scope, Share) {


    $scope.doSomeAction = function(x,y,a,b,c) {
        alert("hii");

        var user= x+"="+y+"="+a+"="+b+"="+c+"";

        Share.value = {
            firstName: x,
            LastName: y,
            email: a,
            password: b,
            confirmPassword: c
        }


        console.log(user);



        console.log("kjjhjhjhjhjhjhjh");
        //$location.url('http://localhost:63342/newTest/index.html#/')

        window.location = "http://localhost:63342/Angular_Try/index.html#/contact";

    };

});


scotchApp.controller('contactController', function ($scope, Share) {


    //$scope.firstName=test.split("=")[0];
    //$scope.LastName=test.split("=")[1];
    //$scope.email=test.split("=")[2];
    //$scope.password=test.split("=")[3];
    //$scope.Confirmpassword=test.split("=")[4];
    //// var lastName=test.concat("=");
    $scope.firstName = Share.value.firstName;
    $scope.LastName = Share.value.LastName;
    $scope.email = Share.value.email;
    $scope.password = Share.value.password;
    $scope.confirmPassword = Share.value.confirmPassword;

    console.log($scope.firstName);


    //$scope.rootValue=$routeParams.user;





});
