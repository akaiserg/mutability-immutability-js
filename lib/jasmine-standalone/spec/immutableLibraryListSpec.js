describe("Test of  the immutable library, LIST", function(){
    it("Immutable.List", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        expect(list1.size).toEqual(6);
        var list2 = list1.push( 'u' );
        console.info(list2);
        //expect(list1).not.toEqual(list2);
        expect(list1).not.toEqual(list2);
        expect(list1.isList).not.toEqual(list2);

    });

    // https://facebook.github.io/immutable-js/docs/#/Lista

    it("is()", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        var list2 = Immutable.List(['q','w','e','r','t','y']);
        expect(list1.size).toEqual(6);
       console.info(list2);
        //expect(list1).not.toEqual(list2);
        expect(Immutable.is(list1, list2)).toEqual(true);
        var list2 = list1.push( 'u' );
        expect(Immutable.is(list1, list2)).not.toEqual(true);

    });


    it("hashCode()  ", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        var list2 = Immutable.List(['q','w','e','r','t','y']);
        console.info(list1.hashCode(),list2.hashCode());
        //expect(list1).not.toEqual(list2);
        expect(list1.hashCode()).toEqual(list2.hashCode());
        var list3 = list1.push( 'u' );
        console.info(list1.hashCode(),list3.hashCode());
        expect(list1.hashCode()).not.toEqual(list3.hashCode());

    });


    it("first() and last()  ", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        console.log('first', list1.first());
        expect(list1.first()).toEqual("q");
        console.log('last', list1.last());
        expect(list1.last()).toEqual("y");


    });

    it("contains() and reverse()  ", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        var list2 = Immutable.List(['q','w','e']);
        var list3 = Immutable.List(['e','w','q']);

        expect(list1.contains(2)).toBe(false);
        console.log('contains 2', list1.contains(2));
        expect(list1.contains("t")).toBe(true);
        console.log('contains t', list1.contains("t"));

        var list4= list2.reverse();
        expect(list4).toEqual(list3);


        /*var list4= list3.push(3, 4, 5);
        console.log(list4.size);
        //console.log(list4.get(2));
        console.log(list4.delete(2).size);
º*/
    });

    it("push(),delete()  and pop()  ", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        var list2 = Immutable.List(['q','w','e']);
        var list3= list2.push('r', 't', 'y');
        console.log(list2.size);
        console.log(list3.size);
        expect(list2.size).toBe(3);
        expect(list3.size).toBe(6);
        //console.log(list4.get(2));
        list3=list3.delete(5);
        list3=list3.delete(4);
        list3=list3.delete(3);
        console.info(list3.last());
        expect(list3.last()).toEqual("e");
        expect(list1.pop().pop().pop().last()).toEqual("e");

    });


    it("find(),forEach() and fromJS() ", function(){

        var list1 = Immutable.List(['q','w','e','r','t','y']);
        var valeNoFound=list1.find(function(item) {
            return item === "ge";
        });
        expect(valeNoFound).toBe(undefined);
        var valeFound=list1.find(function(item) {
            return item === "e";
        });
        expect(valeFound).toBe("e");

        var list3=[];
        list1.forEach(function(item) {
           list3.push(item)
        });
        var list4= Immutable.fromJS(list3);
        console.info(list4);
        expect(list1).toEqual(list4);
    });







});