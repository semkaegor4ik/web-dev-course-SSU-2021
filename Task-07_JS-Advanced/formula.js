console.log("Задание 7.3");

function factorial(n) 
{
    return n ? n * factorial(n - 1n) : 1n;
}

function binomial(n) {
    if (typeof n != "number" || !Number.isInteger(n) || n < -200 || n > 200) {
        return 'Invalid input';
    }

    let result = '';
    let isPlus = true;

    if (n < 0) {
        isPlus = false;
        n = Math.abs(n);
    }

    if (n == 0) {
        result = '1'
    } else {
        {
            for (var i = 0; i <= n; i++) {
                var c = factorial(BigInt(n)) / (factorial(BigInt(n - i)) * factorial(BigInt(n) - BigInt(n - i)));
                (c == 1) ? c = "" : result += c.toString();

                if (n - i == 1) {
                    result += 'a';
                }
                if (n - i > 1) {
                    result += 'a^' + (n - i);
                }
                if (i == 1) {
                    result += 'b';
                }
                if (i > 1) {
                    result += 'b^' + (i);
                }
                if (i != n) {
                    result += ' + ';
                }
            }
        }
    }

    return isPlus ? result : '1 / (' + result + ')';

}

console.log(binomial(0));
console.log(binomial(1));
console.log(binomial(2));
console.log(binomial(-2));
console.log(binomial(3));
console.log(binomial(5));
console.log(binomial(201));
console.log(binomial(3.14));