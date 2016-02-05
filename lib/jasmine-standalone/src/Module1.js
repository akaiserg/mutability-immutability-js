var Module1 = (function () {

    var val=1;


    return {
        setVal: function () {

            val=val+1;
            console.info("new val is="+val);
        },
		init: function(){
		
			console.info(1);
			return true;
		
		}
		

    };

})();