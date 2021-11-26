console.log("Задание 7.2");

function createTab(row, col, str) {
    if (typeof col != "number" || typeof row != "number" || !Number.isInteger(col) || !Number.isInteger(row) || col < 1 || row < 1) {
        return 'The first and second arguments must be a positive integer!';
    }

    let cell = [];
    let strLength = str.length;
    let table = '';

    for (let i = 0; i < strLength; i += col) {
        cell.push(str.substring(i, i + col));
    }

    for (let i = 0; i < row; i++) {    
        table += "+---".repeat(col) + "+\n";
        for (let j = 0; j < col; j++) {
            if (typeof cell[i] != "undefined" && typeof cell[i][j] != "undefined") {
                if (cell[i][j] == ' ')  {
                    table += `|   `; 
                }
                else {
                    table += `| ${cell[i][j]} `;
                }
            }
            else 
            table += `|   `; 
        }
        table += "| \n";
    }
    table += "+---".repeat(col) + "+\n";
    return (table);
}


console.log(createTab(4, 4, "Hello World!"));
console.log(createTab(4, 3, "Nice pattern"));
console.log(createTab(3, 4, "Nice pattern"));
console.log(createTab(3, 3, ""));
console.log(createTab(-4, 3, "Nice pattern"));
