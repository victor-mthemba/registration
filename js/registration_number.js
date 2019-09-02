function Registration(numberList) {

    var regNumberList =  numberList || [];
    var errorMessage = "";
  
    function addRegNumber(number)
    {
        errorMessage = "";

        var theNumber = number.toUpperCase();

        

        if(theNumber === "") {
            errorMessage = "Enter a registration number!";
            return false;
        }

        var regex = /[A-Z]{2}\s[0-9]{3,5}$/gm;
        var regex2 = /([A-Z]){2}\s+([0-9]){3}\s([0-9]){3}/g;

        var theRegNumber = regex.test(theNumber);
        var theRegNumber2 = regex2.test(theNumber)


        if(!theRegNumber && !theRegNumber2) {
            errorMessage = "Input is invalid!";
            return false;
        }

        if(theNumber.startsWith("CA") || theNumber.startsWith("CL") || theNumber.startsWith("CJ")) {
            if(!regNumberList.includes(theNumber)) {
                regNumberList.push(theNumber);
                return true;
             } 
             else {
                 errorMessage = "Number already exist!";
                 return false;
             } 

        }
        
        
 
    }
    
    function getErrorMessage() {
        return errorMessage;
    }

    function getRegNumberList() {
        return regNumberList;
    }

    function myfilter(myNumber) {
    
        var regNumber = [];
    
        for(var i = 0; i < regNumberList.length; i++) {

            const currentRegNumber = regNumberList[i];
    
            if(currentRegNumber.startsWith(myNumber)) {
                regNumber.push(currentRegNumber);
            }
        }
        return regNumber;

    }

    function clearStore() {
        regNumberList = [];
    }

    return {

        addRegNumber,
        getRegNumberList,
        myfilter,
        getErrorMessage,
        clearStore,
    }

}