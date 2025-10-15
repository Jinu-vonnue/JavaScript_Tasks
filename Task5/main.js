const text = document.getElementById("text");
const buttons = document.querySelectorAll(".btn-div button");

let counter = 0;
text.style.color = "grey";

buttons.forEach(btn => {
  btn.addEventListener("click",function(event){
    if(event.target.id === "incre"){
      if(counter>=10) counter=10;
      else counter++;
    }
    else if(event.target.id === "decre"){
      if(counter<=-10) counter = -10;
      else counter--;
    }
    else{
      counter = 0;
    }

    text.textContent = counter;
    if(counter<0) text.style.color = "red";
    else if(counter>0) text.style.color = "green";
    else text.style.color = "grey";
  })
})