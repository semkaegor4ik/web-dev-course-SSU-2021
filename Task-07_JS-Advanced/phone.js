console.log("Задание 7.1");

function formatPhone(numArray){
    let format = "+7 (XXX) XXX-XX-XX";
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (numArray.length != 10 ) {
        return 'Invalid input';
    }
    for(var i = 0; i < numArray.length; i++) {
        if(digits.includes(numArray[i])) {
            format = format.replace('X', numArray[i]);
        } else {
            return 'Invalid input'
        } 
    }
        return format;
  }

  console.log(formatPhone([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
  console.log(formatPhone([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]));
  console.log(formatPhone([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]));
  console.log(formatPhone([]));
  console.log(formatPhone('aw93fha='));
