console.log ("Задание 6.4");

const accum = (str) => str
  .split(' ')
  .map(
        word => word.split('')
       .map(function(w,i){ return w.repeat(i+1) })
      .join('-')
       )
  .join(' ');

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

