/*
Given an array of words:
["care", "race", "acre", "dog", "god", "cat"]
Group words that are anagrams together.
 Output:
[
  ["care", "race", "acre"],
  ["dog", "god"],
  ["cat"]
]
*/



// let arr = ["car","rac","racc","silent","tilesn","dog","odg"];
let arr = ["care", "race", "acre", "dog", "god", "cat"];
let arrNew = [];
let final = [];

for (let item of arr) {
  arrNew.push(item.split("").sort().join(""));
}
// arrNew.sort();

for (let i = 0; i < arrNew.length; i++) {
  let temp=[arr[i]];
  for(let j=i+1; j<arrNew.length ;j++){
    if(arrNew[i] === arrNew[j]){
      temp.push(arr[j]);
      i++;
    }
    else{
      break;
    }
  }
  final.push(temp);
}
console.log(final);