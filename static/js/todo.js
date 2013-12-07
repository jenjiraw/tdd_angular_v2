function ToDoController($scope){
    $scope.items = [ {"isChecked":true,"title":"Learn Angular"},
                     {"isChecked":true,"title":"Learn TDD"},
                     {"isChecked":false,"title":"Go home"} ];
    
    //Add $ in front only if it's angularJS related
    $scope.addItem = function(){
        $scope.items.push({"isChecked":false,"title": $scope.itemName});  
        $scope.itemName ="";
    };
}