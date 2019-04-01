//Given an array of integers. For example [1,2,2,2,5,7].
// I want to output any groups of consecutive identical numbers with their sum. 
//The output should be [1,6,5,7]

var arr = [1,2,2,2,5,7];
function groupArray(arr) {
  let resultArr = arr.reduce((res, item) => {
      console.log(res, item);
      return res === item ? res + item : item;
  });
};

groupArray(arr);
