describe("Test of  the immutable library, STACK", function(){
    it("Immutable.Stack", function(){

        var stack1= new Immutable.Stack();
        var stack2=stack1.push(1,2);
        stack2=stack2.push(3);
        stack2=stack2.push(4);
        console.info(stack1.size);
        console.info(stack2.size);
        expect(stack1.size).toEqual(0);
        expect(stack2.size).toEqual(4);

    });

    it("last() and  first()", function(){

        var stack1= new Immutable.Stack();
        stack1= stack1.push(1,2,3,4,5,6);
        console.info(stack1.first());
        console.info(stack1.last());
        expect(stack1.first()).toEqual(1);
        expect(stack1.last()).toEqual(6);

    });


    it("get() and includes()", function(){

        var stack1= new Immutable.Stack();
        stack1= stack1.push(1,2,3,4,5,6);
        console.info(stack1.get(3));
        console.info(stack1.get(15));
        console.info(stack1.includes(5));

        expect(stack1.get(3)).toEqual(4);
        expect(stack1.get(8)).toEqual(undefined);
        expect(stack1.includes(5)).toEqual(true);
        expect(stack1.includes(15)).toEqual(false);

        //last clear

    });

    it("pop() and has()", function(){

        var stack1= new Immutable.Stack();
        stack1= stack1.push(10,20,30,40,50,60);
        console.info(stack1.size);
        console.info(stack1.has(5));
        expect(stack1.has(5)).toEqual(true);
        stack1= stack1.pop();
        console.info(stack1.size);
        console.info(stack1.has(5));
        expect(stack1.has(5)).toEqual(false);
        //last clear

    });


    it("find(),forEach(, fromJS() and sort() ", function(){

        var stack1= new Immutable.Stack();
        stack1= stack1.push(10,20,30,40,50,60);
        var val10Found=stack1.find(function(item) {
            return item === 10;
        });
        expect(val10Found).toBe(10);
        console.info(val10Found);

        var val10oNoFound=stack1.find(function(item) {
            return item === 100;
        });
        expect(val10oNoFound).toBe(undefined);
        console.info(val10oNoFound);

        var stack2= new Immutable.Stack();
        stack1.forEach(function(item) {
            stack2=stack2.push(item);
        });
        console.info(stack1);
        console.info(stack2.sort());
        stack2=stack2.sort();
        expect(stack1).toEqual(stack2);

    });

});