console.log ("Задание 6.3");

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiouAEIOU'.includes(letter)).length;


var WORD_RESULT = document.querySelector(".word_result");
var WORD_INPUT = document.getElementById("word");
  
document.querySelector(".but_word_result").onclick = (event) => {
    event.preventDefault();
    WORD_RESULT.textContent = countVowels(WORD_INPUT.value);
}
  
  
document.querySelector(".word_reset").onclick = (event) => {
    event.preventDefault();
    WORD_INPUT.value = "";
    WORD_RESULT.textContent = "";
}