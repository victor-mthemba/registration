var inputReg = document.querySelector(".inputNum");
var addBtn = document.querySelector(".addBtn");
var myList = document.querySelector(".myList");
var radioType = document.querySelectorAll(".town");
var errorMessages = document.querySelector(".error");
var showBtn = document.querySelector(".showBtn");
var resetbuttonOne = document.querySelector(".resetBtnOne");


function clearError() {
	setTimeout(function(){
		errorMessages.innerHTML = "";
	}, 5000);
}

function addRegNumberElement(theNumbers) {
    var newListItem = document.createElement('li');
        newListItem.classList.add('li')    
        newListItem.textContent = theNumbers.toUpperCase();
        myList.appendChild(newListItem);
}

var keepRegNumb = []

if (localStorage['Numbers'] !== undefined)
{
    keepRegNumb = JSON.parse(localStorage['Numbers']);
}

var instance = Registration(keepRegNumb);

var currentRegNumbers = instance.getRegNumberList();

for(var i = 0; i < currentRegNumbers.length; i++) {
    addRegNumberElement(currentRegNumbers[i].toUpperCase());
 }

function addedList(){
    
    if (instance.addRegNumber(inputReg.value)) {
        addRegNumberElement(inputReg.value.toUpperCase()) ;
        localStorage['Numbers'] = JSON.stringify(instance.getRegNumberList());
    }

    errorMessages.innerHTML = instance.getErrorMessage();
    clearError();

}
addBtn.addEventListener('click', addedList);


function show() {

    var theTown = document.querySelector("input[type='radio']:checked");

    if(!theTown) {
        errorMessages.innerHTML = "Select a town!";
        clearError();
        return;
    }
    
    var regiNumbers = instance.myfilter(theTown.value);
    myList.innerHTML = "";

    for(var i = 0; i < regiNumbers.length; i++) {
       addRegNumberElement(regiNumbers[i].toUpperCase());
    }

}

showBtn.addEventListener('click', show);

resetbuttonOne.addEventListener('click', function () {
    localStorage.removeItem("Numbers");
    instance.clearStore();
    myList.innerHTML = "";
});

