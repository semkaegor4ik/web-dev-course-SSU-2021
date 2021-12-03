console.log ("Задание 6.2");

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    });
    
}

var BINARY_RESULT = document.querySelector(".binary_result");
var BINARY_INPUT = document.getElementById("binary");

document.querySelector(".but_binary_result").onclick = (event) => {
    event.preventDefault();
    BINARY_RESULT.textContent = text2Binary(BINARY_INPUT.value);
}


document.querySelector(".binary_reset").onclick = (event) => {
    event.preventDefault();
    BINARY_INPUT.value = "";
    BINARY_RESULT.textContent = "";
}

