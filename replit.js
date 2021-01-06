// longest string
let arr = strings1
function longestString(arr) {
  let longest = "";
    for(i = 0; i < arr.length; i++){
      if(arr[i].length > longest.length){
        longest = arr[i]
      }
    }
    return longest
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

//reversed string
function reverseStringFunctions(str) {
    return str.split("").reverse().join("");
  }
  reverseString("LLO")

function reverseString(str) {
    let reversedString = "";
    for(let i = str.length - 1; i >= 0; i--){
      reversedString += str[i];
    }
    return reversedString
}
  reverseString("LLO")