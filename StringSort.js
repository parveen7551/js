let names = ['parvee','as','my','name','etc']; // String
let sorted = names.sort((a,b)=>{
  if(a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sorted);
