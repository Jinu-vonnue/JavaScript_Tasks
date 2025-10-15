/*
Given:
const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];
Create a new array:
[
  { name: "Alice", status: "Fail" },
  { name: "Bob", status: "Pass" },
  { name: "Charlie", status: "Fail" },
]
*/

const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

let passMark = 50;
const newArray = [];

students.forEach(itm =>{
  
    // newArray.push(`{ name : ${itm.name}, status : ${itm.marks>passMark ? "Pass" : "Fail"}}`)
    newArray.push({name : itm.name , status : itm.marks>passMark ? "Pass" : "Fail"});
  
});

console.log(newArray);
console.log(students);

console.log(newArray[0].status);