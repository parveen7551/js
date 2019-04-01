// greater than half of the input array 
// abccda--> a2b1c2d1


let str = 'thisIsJsNow';//'this_is_js_now'; //thisIsJsNow
let result = '';

let strArr = str.split('_');

if(str.includes('_')) {
    for(let i = 0; i < strArr.length; i++) {    
        if(i == 0) {
            result = strArr[i];        
        } else {
            result += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
        }
    }
} else {
    let tempArr = str.split('');
    result = tempArr.reduce((acc,val,i,array) => {
        if(val.charCodeAt() >= 65 && val.charCodeAt() <= 91) {
            acc += '_';
            acc += val.toLowerCase();
        } else {
            acc += val;
        }
        return acc;
    },"");
}
console.log(result);
