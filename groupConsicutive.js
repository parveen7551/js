const myArray = [1,2,2,2,5,6,6,8];

let temp = 0;
let result = myArray.reduce((acc,currentValue,index,array) => {
   if(currentValue == array[index + 1]) {
     temp += currentValue;
   } else {
     temp +=currentValue;
     acc.push(temp);
     temp = 0;
   }
  return acc;
},[]);
console.log(result);
