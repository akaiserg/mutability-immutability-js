describe("simpleMutableState  test", function(){
	it("Check mutable state, function mutateVal", function(){

        var array0=[1,2,3,4,5,0];
        var array1=[1,2,3,4,5,0];
        // array1 has changed
        var array2= array1.sort();
        console.info(array1,array2);
		expect(array0).toEqual(array1);
	
	})
	
});