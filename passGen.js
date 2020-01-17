

//--------------HTML ASCII char Array for all the possible lower, upper, number and symbols -----------------//

var tempArray = [];
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122); //lowercase 
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57); //numbers
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90); //uppercase
var SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)) //Combining all possible symbols

//--------------DOM Elements--------------//

var clipboardEl = document.getElementById('clipboard');
var form = document.getElementById('passwordGenerator');
var passwordDisplay = document.getElementById('passwordDisplay');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var userGuess = prompt("Enter number greater than 8");

    if (userGuess <= 8) {
        alert("Password length must be greater than 8");
        return;
    }

   
    
    else {
        
        generatePassword();
        
    }

    

   
    var includeLowerCase = confirm("Do you want Lowercase");
    var includeUpperCase = confirm("Do you want Uppercase");
    var includeNumbers = confirm("Do you want Numbers");
    var includeSymbols = confirm("Do you want symbols");

    if (includeLowerCase || includeUpperCase || includeNumbers || includeSymbols || includeSymbols == confirm){
    
    var password = generatePassword(userGuess, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

        passwordDisplay.innerText = password;
        document.getElementById("clipboard").disabled = false;

    }

    else {
        alert ("Please select any of the following option for your desired option");
    }

    if (password.length > 8 && password.length < 12){
        
        var arr = ["Strong Password"];
        document.body.append(arr);

    }

    if (password.length >= 12){
        
        var arr = ["Very Strong Password"];
    
        document.body.append(arr);

    }
   
});

//----------Copy pasword  to clipboard function-------------//
clipboardEl.addEventListener('click', function(){
   
    const textarea = document.createElement('textarea');
    const password = passwordDisplay.innerText;

    if(password) {
   
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    
    }

    
   
    alert('password copied to clipboard');
    
       document.getElementById("clipboard").disabled = false;
      // passwordDisplay.innerText = ""; will clear the displayed password once you clicked on copy to clipboard button
    
   
});

//------------End of copy password to clipboard----------------------//

function generatePassword(userGuess, includeLowercaseElement, includeUppercaseElement, includeNumbersElement, includeSymbolsElement){
     
    let charCodes = tempArray;
    
    if (includeLowercaseElement){

       charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);

    }
    if (includeUppercaseElement){
        
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);

    }
    if (includeSymbolsElement){
        
        charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);

    }
    if (includeNumbersElement){
        
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);

    }

    var passwordCharacters = [];
    for (let i = 0; i < userGuess; i++) {
        var characterCode= charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push (String.fromCharCode(characterCode));
    }

    return passwordCharacters.join('');
}


//------- Defining a function to generate an array for us from low to high from ASCII code---//
function arrayFromLowToHigh(low, high){
    var array = [];
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array;
}

