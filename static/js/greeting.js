
//Define what variable(s) and what function(s) can be called from this controller by adding it into $scope
function GreetingController($scope) {
    //ng-model -> Give comment above $scope.name so that we know that this var is called in view layer. If this var name is changed in controller, should go back to change in View.
    $scope.name = "May";
    
    $scope.getName = function () {
        return $scope.name;
    };
    
    $scope.clearName = function(){
        $scope.name='';
    };
    
}