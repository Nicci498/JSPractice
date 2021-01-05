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
function reverseStringMethods(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("LLO")

