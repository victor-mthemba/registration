var inputReg = document.querySelector(".inputNum");
var addBtn = document.querySelector(".addBtn");
var myList = document.querySelector(".myList");
var radioType = document.querySelectorAll(".town");
var instance = registration();

if (localStorage['Numbers'] !== undefined)
{
    var keepRegNumb = JSON.parse(localStorage['Numbers']);
}
else
{
    keepRegNumb = [];
}
var instance = registration(keepRegNumb);

function addedList(){

    for (var i = 0; i < radioType.length; i++) 
    {
        if (radioType[i].checked) 
        {
            var theTown = radioType[i].value;
        }
    }

    if (instance.addRegNumber(inputReg.value))
    {
        var newListItem = document.createElement('li');    
        newListItem.textContent = inputReg.value;
        myList.appendChild(newListItem);
        localStorage['Numbers'] = JSON.stringify(instance.getRegNumberList());
    }

    

}
addBtn.addEventListener('click', addedList);