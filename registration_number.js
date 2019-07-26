function registration() {

    var regNumberList = [];

    function addRegNumber(number)
    {
        if(!regNumberList.includes(number))
        {
            regNumberList.push(number);
        }
        
    }

    function getReg()
    {
        return regNumberList;
    }

    return {
        addRegNumber,
        getReg,
    }


}