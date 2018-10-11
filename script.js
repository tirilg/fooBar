"use strict";

let data = JSON.parse(FooBar.getData());
const queueText = document.querySelector(".queueNumber");
const servingText = document.querySelector(".servingNumber");

document.addEventListener("DOMContentLoaded", init);

function init() {
  setInterval(update, 500); //Runs several times
  //setTimeout(update, 5000);
}

/*-------------------------------------------
Update data
------------------------------------------*/
function update() {
  console.log(data);
  displayData();
}

/*-------------------------------------------
Display data
------------------------------------------*/
function displayData() {
  /* display queue */

  let queue = data.queue.length;
  queueText.textContent = queue;

  /* display serving */
  let serving = data.serving.length;
  servingText.textContent = serving;
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
  //take todays day
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  //select the div to put in the clock
  let time = document.querySelector(".clockDiv");
  //place the content in the document
  time.textContent = hours + ":" + minutes + ":" + seconds;
  //Runs the function all the time
  setInterval(updateTime, 1);
}

updateTime();

//function to add zero in front of numbers < 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/*-------------------------------------------
Show/hide sidemenu
------------------------------------------*/

function hideMenu() {
  let menuBtn = document.querySelector(".menuToggle img");
  let infoMenu = document.querySelector(".info");
  let wrapper = document.querySelector(".wrapper");

  menuBtn.addEventListener(
    "click",
    function() {
      if (infoMenu.style.display == "none") {
        infoMenu.style.display = "block";
        wrapper.classList.remove("closed");
      } else {
        infoMenu.style.display = "none";
        wrapper.classList.add("closed");
      }
    },
    false
  );
}
hideMenu();
