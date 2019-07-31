describe('Registion number added' , function(){
    it('should be able to add a one registration number on a list' , function(){
        var case1 = registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CA 12345");
        assert.deepEqual(["CA 12345"], case1.getRegNumberList());
    });

    it('should be able to add a two registration numbers on a list' , function(){
        var case1 = registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CJ 24689");
        assert.deepEqual(["CA 12345", "CJ 24689"], case1.getRegNumberList());
    });

    it('should be able to keep track of  all reg numbers  that starts with CA, CJ and CL' , function(){
        var case1 = registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CJ 24689");
        case1.addRegNumber("CL 36971");
        case1.addRegNumber("CK 32145");

        assert.deepEqual(case1.myfilter(),["CA 12345", "CJ 24689", "CL 36971"]);
    });


});