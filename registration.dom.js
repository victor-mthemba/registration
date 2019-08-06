var inputReg = document.querySelector(".inputNum");
var addBtn = document.querySelector(".addBtn");
var myList = document.querySelector(".myList");
var radioType = document.querySelectorAll(".town");
var errorMessage = document.querySelector(".error");
var showBtn = document.querySelector(".showBtn");


function clearError() {
	setTimeout(function(){
		errorMessage.innerHTML = "";
	}, 2000);
}

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

    if(inputReg.value === "")
    {
        errorMessage.innerHTML = "Enter a registration number or select a town";
        clearError();
        return;
    }

    var regex = /[A-Z]{2}\s[0-9]{4}/g;
    var theRegNumber = regex.test(inputReg.value)

    if (!theRegNumber) {
        errorMessage.innerHTML = "Input is invalid!";
        clearError();
        return;
    }

    if (instance.addRegNumber(inputReg.value))
    {
        var newListItem = document.createElement('div');
        newListItem.classList.add('li')    
        newListItem.textContent = inputReg.value.toUpperCase();
        myList.appendChild(newListItem);
    
        localStorage['Numbers'] = JSON.stringify(instance.getRegNumberList());
    }


}
addBtn.addEventListener('click', addedList);


function show() {

    var theTown;

    for (var i = 0; i < radioType.length; i++) {
        if (radioType[i].checked) {
            theTown = radioType[i].value;
        }
    }
    
    var regiNumbers = instance.myfilter(theTown)
    myList.innerHTML = "";

    for(var i = 0; i < regiNumbers.length; i++)
    {
         var newListItem = document.createElement('div');
         newListItem.classList.add('li')    
         newListItem.textContent = regiNumbers[i].toUpperCase();
         myList.appendChild(newListItem);
    }

}
showBtn.addEventListener('click', show);

