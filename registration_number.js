function registration() {

    var regNumberList = [];
    var errorMessage = "add valid registration number";
  
   // add registration number to a list if it is not there 
    function addRegNumber(number)
    {
        var theNumber = number.toUpperCase();
        
        
        if(!regNumberList.includes(theNumber))
        {
           regNumberList.push(theNumber);
           return true;
        } 
        else 
        {
            return false;
        } 

        
    }
    
    function getErrorMessage()
    {
        return errorMessage;
    }

    function getRegNumberList()
    {
        return regNumberList;
    }


    function myfilter(myNumber) 
    {
        //create an empty list and
        var regNumber = [];
    
        //loop over regNumberList.
        for(var i = 0; i < regNumberList.length; i++)
        {
            const currentRegNumber = regNumberList[i];
            //check if reg number starts with the appropreiate string.
            if(currentRegNumber.startsWith(myNumber))
            {
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