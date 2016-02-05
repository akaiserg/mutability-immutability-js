describe("Testing of  the mutability of objects", function(){
    it("Creating objects", function(){

       var o1= new Object();
       var o2= {};
        //without any  change
       var o3=o1;
       expect(o1).toEqual(o2);
       expect(o1).toEqual(o3);

    });

    it("Assigning values", function(){

        var o1= new Object();
        o1.val1="1";
        o1.val2="2";
        var o2= {};
        var o2=o1;
        o2.valExtra="3";
        console.info(o1,o2);
        expect(o1).toEqual(o2);

    });


    it("Testing modules, global attribute", function(){

        var Module1 = (function () {
            var __val=1;
            return {
                setVal: function (val) {
                    __val=val;
                },
                getVal: function(){
                    return __val;
                }
            };
        })();

        var m1= Module1;
        var m2= Module1;
        expect(m1.getVal()).toEqual(1);
        expect(m1.getVal()).toEqual(m2.getVal());
        m2.setVal(2);
        //expect(m1.getVal()).not.toEqual(m2.getVal());
        expect(m1.getVal()).toEqual(m2.getVal());
        console.info(m1.getVal());

    });



    it("Testing modules, public attribute", function(){

        var Module1 = (function () {

            return {
                __val:1,
                setVal: function (val) {
                    this.__val=val;
                },
                getVal: function(){
                    return this.__val;
                }
            };
        })();

        var m1= Module1;
        var m2= Module1;
        expect(m1.getVal()).toEqual(1);
        expect(m1.getVal()).toEqual(m2.getVal());
        m2.setVal(2);
        expect(m1.getVal()).toEqual(m2.getVal());
        console.info(m1.getVal());

    });


    it("Testing modules, returning  a function  with a global attribute ", function(){

        var Module1 = (function () {
             var __param=1;
             function constructor(){
                this.getParam=function(){
                    return __param;
                }
                this.setParam=function(param){
                    __param=param;
                }
            }
            return constructor;
        })();

        var m1= new Module1();
        var m2= new Module1();
        console.info(m1.getParam());
        expect(m1.getParam()).toEqual(m2.getParam());
        m2.setParam(2);
        console.info(m1.getParam(),m2.getParam());
        expect(m1.getParam()).toEqual(m2.getParam());
    });



    it("Testing modules, returning  a function  with an attribute inside of the function ", function(){

        var Module1 = (function () {

            function constructor(){
                var __param=1;
                this.getParam=function(){
                    return __param;
                }
                this.setParam=function(param){
                    __param=param;
                }
            }
            return constructor;
        })();

        var m1= new Module1();
        var m2= new Module1();
        console.info(m1.getParam());
        expect(m1.getParam()).toEqual(m2.getParam());
        m2.setParam(2);
        // m1 and m2 are different because 'new' gives a new instance
        console.info(m1.getParam(),m2.getParam());
        expect(m1.getParam()).toEqual(1);
        expect(m2.getParam()).toEqual(2);
        // Because it wasn't  used  'new'  m3 has the reference of m1
        var m3= m1;
        m3.setParam(3);
        console.info(m1.getParam(),m3.getParam());
        expect(m1.getParam()).toEqual(m3.getParam());
    });



});