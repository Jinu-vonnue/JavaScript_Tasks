const time = document.getElementById("time");
const textarea = document.getElementById("textarea");
const text = document.getElementById("text");
const accuracyText = document.getElementById("accuracy");

let interval;

function setTime() {
  let counter = 0;
  interval = setInterval(() => {
    counter++;
    time.innerHTML = counter;
  }, 1000);
}

textarea.addEventListener("focus", function () {
  setTime();
});

textarea.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    clearInterval(interval);
    let originalText = text.textContent;
    let typedText = textarea.value;
    let error = 0;
    let i;

    for ( i = 0; i < typedText.length; i++) {
      if (originalText[i] != typedText[i]) {
        error++;
      }
    }
    console.log(error);
    let accuracy = ((i-error)/i)*100;
    console.log(accuracy);
    accuracyText.textContent = Math.round(accuracy)+"%";
  }
});

//accuracy checking
