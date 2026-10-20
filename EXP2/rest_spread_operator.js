const sum = (...numbers) => numbers.reduce((total, num)=>total+num,0);

console.log(sum(1,2,3,4));

const originalArray = [1,2,3];
const newArray = [...originalArray,4,5];

console.log(newArray);