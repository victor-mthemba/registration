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
        var theRegNumber = regex.test(theNumber);

        if(!theRegNumber) {
            errorMessage = "Input is invalid!";
            return false;
        }
        
        if(!regNumberList.includes(theNumber)) {
           regNumberList.push(theNumber);
           return true;
        } 
        else {
            errorMessage = "Number already exist!";
            return false;
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

    return {

        addRegNumber,
        getRegNumberList,
        myfilter,
        getErrorMessage,
    }

}