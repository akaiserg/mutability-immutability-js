describe("Test of  the immutability of Numbers", function(){
    it("Assigning values", function(){

        var n1= 10;
        var n2=  n1;
        expect(n2).toEqual(n1);
        n2=12;
        expect(n2).not.toEqual(n1);
    });


    it("Method  parseInt", function(){

        var n1="10.33";
        var n2= parseInt(n1);
        expect(n1).not.toEqual(n2);
        expect(n2).toEqual(10);
        expect(n1).toEqual("10.33");

    });


    it("Method  toFixed", function(){

        var n1=5.56789;
        var n2= n1.toFixed(3);
        expect(n1).not.toEqual(n2);
        expect(n2).toEqual("5.568");
        expect(n1).toEqual(5.56789);

    });

});


describe("Test of  the immutability of Strings", function(){
    it("Assigning values", function(){

        var s1= "Hello world";
        var s2=  s1;
        expect(s2).toEqual(s1);
        s2=+" !";
        expect(s2).not.toEqual(s1);

    });

    it("Method  slice", function(){

       var s1="Apple, Banana, Kiwi";
       var s2=s1.slice(7,13);
       var s3=s1;
        expect(s1).toEqual(s3);
        expect(s1).not.toEqual(s2);
        expect(s2).toEqual("Banana");
        expect(s3).toEqual("Apple, Banana, Kiwi");

    });

    it("Method  concat", function(){

        var s1="Hello";
        var s2=s1.concat(" ","world");
        var s3=s1;
        expect(s1).toEqual(s3);
        expect(s1).not.toEqual(s2);
        expect(s2).toEqual("Hello world");
        expect(s3).toEqual("Hello");

    });



});