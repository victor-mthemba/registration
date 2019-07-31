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
    // get
    function getErrorMessage()
    {
        return errorMessage;
    }

    function getRegNumberList()
    {
        return regNumberList;
    }


    function myfilter() 
    {
        //create an empty list and
        var regNumber = [];
    
        //loop over regNumberList.
        for(var i = 0; i < regNumberList.length; i++)
        {
            //check if reg number starts with the appropreiate string.
            if(regNumberList[i].startsWith("CA"))
            {
                regNumber.push(regNumberList[i]);
            }
            else if(regNumberList[i].startsWith("CJ"))
            {
                regNumber.push(regNumberList[i]);
            }
            else if(regNumberList[i].startsWith("CL"))
            {
                regNumber.push(regNumberList[i]);
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