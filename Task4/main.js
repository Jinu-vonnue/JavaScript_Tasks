const add = document.getElementById("add");
const text = document.getElementById("text");
const listContainer = document.getElementById("list-container");
const show = document.getElementById("show");

getData();

add.addEventListener("click",function(){
  let list = document.createElement("li");
  list.innerHTML = text.value;
  console.log(list);
  listContainer.appendChild(list);
  saveData();
  text.value="";
})

function saveData(){
  localStorage.setItem("list-data",listContainer.innerHTML);
}

function getData(){
  listContainer.innerHTML= localStorage.getItem("list-data");
}

listContainer.addEventListener("click",function(event){
event.target.style.textDecoration = "line-through";
event.target.id = "hide";
saveData();
})

show.addEventListener("click",function(){
let hide = document.querySelectorAll("#hide");
hide.forEach(itm => itm.remove());
saveData();
})