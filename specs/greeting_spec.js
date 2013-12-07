//Test Spec for Hello {{Name}} in the html file
//This is the structure to Test Suite to test a Controller named "Greeting Controller".
describe('Greeting Controller', function () {
    
    // $scope = variable which is global. Can be called in the app that we set the scope
    var $scope;
    
    //This is used to call a function and run it before running any test case.
    beforeEach(inject(function($rootScope, $controller) {
        var configuration;
        $scope = $rootScope.$new();
        configuration = {$scope: $scope};        
        //Create controller name "GreetingController" with configuration has a variable
        $controller("GreetingController",configuration);
    }));
    
    //First Testcase (it(....); = 1 test case)
    it('Should have name May by default', function() {
        expect($scope.getName()).toEqual("May");
    });
    
    //Next Testcase
    it('Should return Jua when name it Jua',function(){
        $scope.name = 'Jua';
        expect($scope.getName()).toEqual('Jua');
    });
});



