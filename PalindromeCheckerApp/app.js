// first method for Palindrome Word App


  document.querySelector("#check").addEventListener("click", function(){ 

        let txt = document.getElementById("text").value;   // input value
        checkPalindrome(txt);

 });

 function checkPalindrome(txt){
        let newWord = txt.replace(/[^a-zA-z0-9]/g, '').toLowerCase(); // this  variable is for new word
        
        let crossMark = "\u274C";   // for cross mark
        let tickMark = "\u2705";    // for tick mark

        let len = newWord.length;  // length
        let halflen = Math.floor(len/2);  
        let output = document.getElementById("output");  // this variable is for  result
        let i;
            for (i = 0; i < halflen; i++){ // using for loop
                if(newWord[i] !== newWord[len-1-i]){
                    output.textContent = ( crossMark + "" + "Oh No! Given  word is not a palindrome"); // if word is not a palindrome
                    return;
                }
                output.textContent = ( tickMark + "" + "Oh Yes! Given  word is a palindrome"); // if word is a palindrome
            }
 }




// second method for Palindrome Word App 


/*
let crossMark = "\u274C";
let tickMark = "\u2705";


document.querySelector("#check").addEventListener("click" , function (){

        // Check the new word
        let  newWord = document.querySelector("#text").value;
        let output = document.getElementById("text").value;
        // console.log( "This is Palindrome Word", output);

        if(newWord === "madam" )  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }

        else  if(newWord === "racecar")  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }

        else if(newWord === "wow")  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }
        else if(newWord === "noon" )  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }

        else if(newWord === "level" )  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }

        else if(newWord === "radar" )  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }

        else if(newWord === "civic" )  {

            console.log(tickMark + "" + "Oh Yes! Given  word is a palindrome");

        }

        else{

            console.log( crossMark + "" + "Oh No! Given  word is not a palindrome");

        }



});
*/
