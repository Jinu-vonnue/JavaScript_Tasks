/*
Write a program that takes a word and prints a pattern like this:

Input: CAT
Output:
C
CA
CAT
AT
T
*/

let word = prompt("Enter a word");

for(let i=1;i<=word.length;i++){
  console.log(word.slice(0,i));
}

for(let i=1;i<word.length;i++){
  console.log(word.slice(i,word.length));
}


