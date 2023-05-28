// assiging a variable to specifically  target our genate button have to add btn because generate button has a class off btn
var generateBtn = document.querySelector("#generate")

//write password to the #password input
function writePassword(){
  var password = generatePassword();
  var PasswordText =document.querySelector("#password");
  PasswordText.value = password;

}
// defining userChoice & computerChoice
var userChoice 
//when you click the generate button it will call for the write password function
generateBtn.addEventListener("click", writePassword);
// generating generate password function
function generatePassword (){
console.log("U definitley clicked me")
 prompt("how long will the password be 8 - 128 characters allowed");
if(prompt.userChoice < 8 );
console.log("password length must atleast be 8 characters")
prompt("Password must atleast be 8 charcaters!")
 
//need to ask the user prompt questions to meet password requirmemts(password length 8-128 characters)
//also need to ask the user if they want (upercase,lowercase, numeric,and special charaters)ans make sure its being used in password
//generate the password then display it in the box





return "What will my new password be ??"
}


// gets makes a prompt box come down if generate button is called
