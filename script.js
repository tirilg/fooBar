"use strict";

let data = JSON.parse(FooBar.getData());
const queueText = document.querySelector(".queueNumber");

document.addEventListener("DOMContentLoaded", init);

function init() {
    setInterval(() => {
        update();
        init();
    }, 5000); //Runs several times
    //setTimeout(update, 5000);

    displayData();
}



function update() {

    let data = JSON.parse(FooBar.getData());
    displayData();
    console.log(data);
}

/*-------------------------------------------
Display data
------------------------------------------*/
function displayData() {
    let queue = data.queue.length;

    queueText.textContent = queue;

}


/*-------------------------------------------
Open Modal
------------------------------------------*/

//get modal from document
const modal = document.querySelector("#myModal");

//select svg from document
const portraits = document.querySelectorAll(".portrait");

//for each portrait - open modal, when clicked
portraits.forEach(portrait => {
  portrait.addEventListener("click", function(e) {
    //Get data for individual portrait
    if (e.target.id == "first") {
      modal.querySelector(".bartenderName span").textContent =
        data.bartenders[0].name;
      modal.querySelector("img").src = "img/teachers_Peter.svg";
      modal.querySelector(".status span").textContent =
        data.bartenders[0].statusDetail;
    }

    if (e.target.id == "second") {
      modal.querySelector(".bartenderName span").textContent =
        data.bartenders[1].name;
      modal.querySelector("img").src = "img/teachers_Jonas.svg";
      modal.querySelector(".status span").textContent =
        data.bartenders[1].statusDetail;
    }

    if (e.target.id == "third") {
      modal.querySelector(".bartenderName span").textContent =
        data.bartenders[2].name;
      modal.querySelector("img").src = "img/teachers_Martin.svg";
      modal.querySelector(".status span").textContent =
        data.bartenders[2].statusDetail;
    }

    modal.style.display = "block";
  });
});

// Get the <span> element that closes the modal
let closeBTN = document.querySelector(".close");

// When the user clicks on (x), close the modal
closeBTN.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*-------------------------------------------
Make countdown til close 
------------------------------------------*/
function updateTime() {
  //Runs the function all the time
  setInterval(updateTime, 1);

  //select the div to put in the clock
  const time = document.querySelector(".clockDiv");

  //take todays day
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  //place the content in the document
  time.textContent = hours + ":" + minutes + ":" + seconds;
}
updateTime();
