const name = document.getElementById("name");
const email = document.getElementById("email");
const container = document.querySelector(".container");
const shuffle = document.getElementById("shuffle");


callData();

function callData(){
  for(let i=0;i<5;i++){
fetchName(i);
}
}



function fetchName(i){
  const config = {
    headers:{
      'Accept':'application/json'
    }
  }
  
  fetch('https://randomuser.me/api/?results=5',config)
  .then(response => response.json())
  .then(data => {
    console.log(data.results);
    let fullName = data.results[i].name.first +" "+ data.results[i].name.last;
    console.log(fullName);
    let photo = data.results[i].picture.medium;
    console.log(photo);
    let mail= data.results[i].email;
    addData(fullName,photo,mail);
    // console.log(data.results[0].name.first);
  })

}

function addData(fullName,photo,mail){
  const html = `<div class="sub-container">
  <div class="img-container">
        <img
          src="${photo}"
          alt=""
        />
      </div>
      <div class="data">
        <h2 id="name">${fullName}</h2>
        <p id="email"><a href="">${mail}</a></p>
      </div>
        </div>`

  container.insertAdjacentHTML("beforeend",html);
}

shuffle.addEventListener("click",function(){
  container.innerHTML="";
  callData();
})