console.log ("Задание 6.5");

const isIsogram = (word) => {
    return new Set(word.toLowerCase()).size === word.length
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram(""));
