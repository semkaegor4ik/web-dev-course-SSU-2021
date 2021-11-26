console.log ("Задание 6.3");

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiouAEIOU'.includes(letter)).length;

console.log(countVowels('abracadabra'));
console.log(countVowels('ABRACADABRA'));
console.log(countVowels('o a kak ushakov lil vo kashu kakao'));
console.log(countVowels('my pyx'));