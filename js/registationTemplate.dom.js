var inputRegTwo = document.querySelector(".inputNumTwo");
var addBtnTwo = document.querySelector(".addBtnTwo");
var radioTypeTwo = document.querySelectorAll(".townTwo");
var errorMessagesTwo = document.querySelector(".errorTwo");
var showBtnTwo = document.querySelector(".showBtnTwo");
var theRegNumbers = document.querySelector(".myRegNumber");
var resetbuttonTwo = document.querySelector(".resetBtnTwo");


var instanceTwo = Registration();
// get a ref to the template 
var templateDataTwo = document.querySelector(".RegTemplates").innerHTML;
// compile the temp
var compileTemplate = Handlebars.compile(templateDataTwo);


function clearErrorTwo() {
	setTimeout(function(){
		errorMessagesTwo.innerHTML = "";
	}, 4500);
}


// function addRegNumberElement(theNumbers) {
//     var newListItem = document.createElement('div');
//         newListItem.classList.add('li')    
//         newListItem.textContent = theNumbers.toUpperCase();
//         theRegNumbers.appendChild(newListItem);
// }

var keepRegNumbTwo = []

if (localStorage['NumbersTwo'] !== undefined)
{
    keepRegNumbTwo = JSON.parse(localStorage['NumbersTwo']);
}

var instanceTwo = Registration(keepRegNumbTwo);

// var currentRegNumbersTwo = instanceTwo.getRegNumberList();

// for(var i = 0; i < currentRegNumbersTwo.length; i++) {
//     addRegNumberElement(currentRegNumbersTwo[i].toUpperCase());
//  }

function addedListTwo(){


    instanceTwo.addRegNumber(inputRegTwo.value); 
    //addRegNumberElement(inputRegTwo.value.toUpperCase()) ;
    localStorage['NumbersTwo'] = JSON.stringify(instanceTwo.getRegNumberList());

     var templateDataTwo = {
         plate: instanceTwo.getRegNumberList(),
     };

     var regElementData = compileTemplate(templateDataTwo);
     theRegNumbers.innerHTML = regElementData;


    errorMessagesTwo.innerHTML = instanceTwo.getErrorMessage();
    clearErrorTwo();

}
addBtnTwo.addEventListener('click', addedListTwo);


function showTwo(){

    var radioTypeTwo = document.querySelector("input[type='radio']:checked");

    if(!radioTypeTwo) {
        errorMessagesTwo.innerHTML = "Select a town!";
        clearErrorTwo();
        return;
    }
    

     var templateDataTwo = {
         plate: instanceTwo.myfilter(radioTypeTwo.value),
     };

     var regElementData = compileTemplate(templateDataTwo);
     theRegNumbers.innerHTML = regElementData;
     


}
showBtnTwo.addEventListener('click', showTwo);

resetbuttonTwo.addEventListener('click', function () {
    localStorage.removeItem("NumbersTwo");
    instanceTwo.clearStore();
    theRegNumbers.innerHTML = "";
});

window.onload = function () {
    var templateDataTwo = {
        plate: instanceTwo.getRegNumberList(),
    };

    var regElementData = compileTemplate(templateDataTwo);
    theRegNumbers.innerHTML = regElementData;
};
