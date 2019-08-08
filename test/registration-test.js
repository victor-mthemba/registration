describe('Registion number added' , function(){
    it('should be able to add a one registration number on a list' , function(){
        var case1 = Registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CA 12345");
        assert.deepEqual(["CA 12345"], case1.getRegNumberList());
    });

    it('should be able to add a two registration numbers on a list' , function(){
        var case1 = Registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CJ 24689");
        assert.deepEqual(["CA 12345", "CJ 24689"], case1.getRegNumberList());
    });


    it('should be able filter for  all reg numbers  that starts with CA' , function(){
        var case1 = Registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CJ 24689");
        case1.addRegNumber("CL 36971");
        case1.addRegNumber("CK 32145");

        assert.deepEqual(case1.myfilter("CA"),["CA 12345"]);
    });

    it('should be able to filter for  all reg numbers  that starts with CJ' , function(){
        var case1 = Registration();
        case1.addRegNumber("CJ 12345");
        case1.addRegNumber("CJ 24689");
        case1.addRegNumber("CL 36971");
        case1.addRegNumber("CK 32145");

        assert.deepEqual(case1.myfilter("CJ"),["CJ 12345", "CJ 24689"]);
    });

    it('should be able to filter for all reg numbers  that starts with CL' , function(){
        var case1 = Registration();
        case1.addRegNumber("CL 12345");
        case1.addRegNumber("CL 24689");
        case1.addRegNumber("CL 36971");
        case1.addRegNumber("CJ 32145");

        assert.deepEqual(case1.myfilter("CL"),["CL 12345", "CL 24689", "CL 36971"]);
    });

    it('should be able  to filter  all reg numbers  that starts with CL' , function(){
        var case1 = Registration();
        case1.addRegNumber("CL 12345");
        case1.addRegNumber("CL 24689");
        case1.addRegNumber("CL 36971");
        case1.addRegNumber("CJ 32145");

        assert.deepEqual(case1.myfilter("CL"),["CL 12345", "CL 24689", "CL 36971"]);
    });


    it('should be able to filter all reg numbers  that are entered' , function(){
        var case1 = Registration();
        case1.addRegNumber("CL 12345");
        case1.addRegNumber("CL 24689");
        case1.addRegNumber("CL 36971");
        case1.addRegNumber("CJ 32145");

        assert.deepEqual(case1.myfilter(""),["CL 12345", "CL 24689", "CL 36971", "CJ 32145"]);
    });

    it('should be able to initialize from a list' , function(){
        var case1 = Registration(["CL 12345","CL 24689","CL 36971","CJ 32145"]);
        assert.deepEqual(case1.myfilter(""),["CL 12345", "CL 24689", "CL 36971", "CJ 32145"]);
        assert.deepEqual(case1.myfilter("CJ"),["CJ 32145"]);
    });



    it('should be able to return Input is invalid if  an invalid string is entered!' , function(){
        var case1 = Registration();
        case1.addRegNumber("CL 2345555");
        assert.equal(case1.getErrorMessage(),'Input is invalid!');
    });

    it('should be able to return an empty string if a  valid string is entered!' , function(){
        var case1 = Registration();
        case1.addRegNumber("CL 2345");
        assert.equal(case1.getErrorMessage(),'');
    });


});