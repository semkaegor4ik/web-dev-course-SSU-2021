console.log("Задание 8.1");

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const compareRandom = ( ) => Math.random() - 0.5;

function generatePassword() {
    let arr = [];
    arr = arr.concat(arr_num);
    arr = arr.concat(arr_en);
    arr = arr.concat(arr_EN);
    
    arr.sort(compareRandom);

    let password;
    let passLenght = randomInteger (6, 20);

    do {
        password = '';
        for (let i = 0; i < passLenght; i++) {
            password += arr[randomInteger(0, arr.length - 1)];
        }
    } while(!isPasswordValid(password))

    document.querySelector('#result').textContent = password;
}

function isPasswordValid(password) {
    var hasNum = false;
    var hasEn = false;
    var hasEN = false;

    arr_num.forEach(num => {
        if(password.includes(num)){
            hasNum = true;
        }
    });
    arr_en.forEach(en => {
        if(password.includes(en)){
            hasEn = true;
        }
    });
    arr_EN.forEach(en => {
        if(password.includes(en)){
            hasEN = true;
        }
    });

    return hasNum && hasEN && hasEn;
}

document.querySelector('#pass_start').addEventListener('click', generatePassword);

document.querySelector(".pass_reset").onclick = (event) => {
    event.preventDefault();
    document.querySelector('#result').textContent= "";
}