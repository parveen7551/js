let numbers = [3,2,6,44,5,3,33,5,8,99,12]; // Numbers
let names = ['parvee','as','my','name','etc']; // String
let sorted = names.sort((a,b)=>{
  if(a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sorted);
