// let arr = [{name: 'Parveen', age:20},{name:'ram',age: 22},{name:'ramkishan',age: 22}];
// let newArr =  [...new Set(arr.map((x)=> x.age))];
// console.log(newArr);


let arr = [{name: 'Parveen', age:20},{name:'ram',age: 22},{name:'ramkishan',age: 22}];

const map = new Map();
let result = [];
for(const item of arr) {
  if(!map.has(item.age)) {
      map.set(item.age,true);
      result.push({
        age:item.age,
        name:item.name
      });
  }
}


console.log(result);
