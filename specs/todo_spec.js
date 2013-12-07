describe ('ToDoController',function(){
    var scopeForTest;
    
    
    //This is used to call a function and run it before running any test case.
    beforeEach(inject(function($rootScope, $controller) {
        var configuration;
        scopeForTest = $rootScope.$new();
        
        configuration = {$scope: scopeForTest};//scopeForTest is injected into ToDoController as $scope variable
        
        //Create controller name "GreetingController" with configuration has a variable
        $controller("ToDoController",configuration);
    }));
    
    it('Should have 3 items',function(){
        //we refer to the variable in this file whose value is from controller
        expect(scopeForTest.items.length).toEqual(3);
    });
    
    it('Should have only first 2 items checked', function(){
        expect(scopeForTest.items[0].isChecked).toEqual(true);
        expect(scopeForTest.items[1].isChecked).toEqual(true);
        expect(scopeForTest.items[2].isChecked).toEqual(false);
    });
    
    //It's recommended that one unit testcase should have one or two expects()
    //e.g. one test case for amount, and another for detail
    it('Should have 4 items if added one item and value is correct',function(){
        scopeForTest.itemName="haha";
        scopeForTest.addItem();
        expect(scopeForTest.items.length).toEqual(4);
        expect(scopeForTest.items[3].title).toEqual("haha");
        expect(scopeForTest.items[3].isChecked).toEqual(false);
    });
    
    it('Should clear textbox after the item is added',function(){
        scopeForTest.itemName="haha2";
        scopeForTest.addItem(scopeForTest.itemName);
        //console.log(scopeForTest.itemName);
        expect(scopeForTest.itemName).toEqual("");
    });
    
    
});