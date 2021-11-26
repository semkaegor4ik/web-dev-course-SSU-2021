console.log("Задание 8.2");

function ShootoutGame(n, k) {
    let arr = new Array(n).fill().map((e, i) => i + 1)

    for (let i = 1; arr.length > 1; i++) {
        let element = arr.shift();
        !(i % k == 0) ? arr.push(element) : i = 0;
    }
    return arr.shift();
}

console.log(ShootoutGame(7, 3));
console.log(ShootoutGame(11, 19));
console.log(ShootoutGame(1, 300));
console.log(ShootoutGame(14, 2));
console.log(ShootoutGame(100, 1));