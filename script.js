// assiging a variable to specifically  target our genate button have to add btn because generate button has a class off btn
var generateBtn = document.querySelector("#generate")
// sign variable is now equal towhatever the user entered for password inputs

//give the options to which the computer has to chose from when coming to the way a user answers the prompts
const symbols = "!@#$%^&*(){}[]=<>/,."
const numbers = "1234567890"
const lower = "abcdefghijklmnopqrstuvwxyz"
const upper ="ABCDEFGHIJKLMONPQRSTUVWXYZ"
let selectChar =""
// sign is where the answers to the prompts will be held
let sign 
//this function is what is triggered by hitting the generate button but it triggers another function with if statements
function writePassword(){
  var password = generatePassword();
  var PasswordText =document.querySelector("#password");
  PasswordText.value = password;

}



// generator functions that gets random characters

function getRandomChar(){
  return selectChar[Math.floor(Math.random() * selectChar.length)];
}


//when you click the generate button it will call for the write password function
generateBtn.addEventListener("click", writePassword);

// generating generate password function
function generatePassword (){
  selectChar= ""
console.log("U definitley clicked me")
 sign= prompt("how long will the password be 8 - 128 characters allowed")
if( sign< 8){
alert("password length must atleast be 8 characters")
return
} else if (sign> 128){
  alert("password length must less than 128 characters")
  return
} 
const userUpper = confirm ("Do you want uppercase letters?")
if(userUpper){
  selectChar += upper
}
const userLower = confirm ("Do you want lowercase letters?")
if(userLower){
  selectChar+= lower
}
const userNumber = confirm ("Do you want Numbers?")
if(userNumber){
  selectChar+= numbers
}

const userSymbols = confirm ("Do you want special charaters?")
if(userSymbols){
  selectChar+= symbols
}


 
    
  
//need to ask the user prompt questions to meet password requirmemts(password length 8-128 characters)
//also need to ask the user if they want (upercase,lowercase, numeric,and special charaters)ans make sure its being used in password
//generate the password then display it in the box

let password =""
for(var i = 0; i < sign ; i++){
const randomChar = getRandomChar()
password += randomChar
}






return  password

}


