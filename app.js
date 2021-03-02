const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const divShow = document.querySelector("#div-Show");

btnTranslate.addEventListener("click", clickEventHandler)

let userDD = "";
let userMM = "";
let userYYYY = "";
let outputMessage = "";
function validateDate(userDOB)
{
  userDD = parseInt(userDOB.substring(1,3));
  userMM = parseInt(userDOB.substring(4,6));
  userYYYY = parseInt(userDOB.substring(6));
  if (isNaN(userDD) || isNaN(userMM) || isNaN(userYYYY))
  {
      outputMessage = "Birthdate is not valid";
      return false;
  }
  return true;
}
function clickEventHandler(){
    const inputText = txtInput.value;
    if(validateDate(inputText)===true)
  {
    checkDateLeapYear(userYYYY);
  }
   
  divShow.innerText = outputMessage;
  
};


function checkDateLeapYear(year)
{
  if(((year%4) === 0) && ((year%100 != 0) || (year%400 === 0)))
  {
    outputMessage = "\nYou ARE born in leap year! Share this on your social media! ";

  }
  else 
  {
    outputMessage = "\nYou are NOT born in leap year"
  }
}


