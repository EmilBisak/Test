let lettersElement = document.querySelector(".letters");

let lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for (let i = 0; i < lettersArr.length; i++) {
    const element = lettersArr[i];
    lettersElement.innerHTML += `<div class="letter-wrapper"><h2>${element} (${i+1})</h2></div>`
    
    
}