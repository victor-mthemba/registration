describe('Registion number added' , function(){
    it('should be able to add a one registration number on a list' , function(){
        var case1 = registration();
        case1.addRegNumber("CA 12345");
        assert.deepEqual(["CA 12345"], case1.getReg());
    });

    it('should be able to add a two registration numbers on a list' , function(){
        var case1 = registration();
        case1.addRegNumber("CA 12345");
        case1.addRegNumber("CJ 24689");
        assert.deepEqual(["CA 12345", "CJ 24689"], case1.getReg());
    });

});