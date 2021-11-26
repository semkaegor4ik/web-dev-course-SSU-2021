console.log ("Задание 6.2");

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    });
    
}

console.log(text2Binary('man'));
console.log(text2Binary('AB'));
console.log(text2Binary('wecking'));
console.log(text2Binary('Ruby'));
console.log(text2Binary('Yosemite'));