const array = ['first', 'second', 'third', 'forth', 'fifth', 'sixth']


for (let i = 0; i<array.length; i++) {
   console.log(i);
   console.log(array[i]);
   console.log(i+1<array.length);
}

//stack

var games = [];
games.push('1st');
games.push('2nd');
games.push('3rd');
games.push('4th');

console.log(games.pop());
console.log(games.pop());
console.log(games.pop());
console.log(games.pop());
console.log(games.pop()); // space


//queue

var games = [];
games.push('1st');
games.push('2nd');
games.push('3rd');
games.push('4th');

console.log(games.shift());
console.log(games.shift());
console.log(games.shift());
console.log(games.shift());
console.log(games.shift()); // space


//average 

let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));
console.log(games.shift()); // space

//random values

var arr = [];
for (var i=0, t=20; i<t; i++) {
    arr.push(Math.round(Math.random() * t));
    console.log(arr.shift());
}

// min and max

ain = [3, 5, 9, 1, 8, 6];

console.log("min: " + Math.min(...ain));
console.log("max: " + Math.max(...ain));








