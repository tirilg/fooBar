"use strict";

let data = JSON.parse(FooBar.getData());


function init() {
    //setInterval(update, 5000); //Runs several times
    setTimeout(update, 5000);
}
init();

function update() {
    let data = JSON.parse(FooBar.getData());
    console.log(data);
    handleBartenders(data.bartenders);
}
function handleBartenders(bartenders) {
    console.log(bartenders);
    const bartender = Object.keys(bartenders); //get houses (keys)

}

//get modal from document
const modal = document.querySelector("#myModal");

//select svg from document
const portraits = document.querySelectorAll('.portrait');

//for each portrait - open modal, when clicked 
portraits.forEach(portrait => {
    portrait.addEventListener("click", function (e) {

        //Get data for individual portrait
        if (e.target.id == "first") {
            modal.querySelector(".bartenderName span").textContent = data.bartenders[0].name;
            modal.querySelector("img").src = "img/teachers_Peter.svg";
            modal.querySelector(".status span").textContent = data.bartenders[0].statusDetail;
        }

        if (e.target.id == "second") {
            modal.querySelector(".bartenderName span").textContent = data.bartenders[1].name;
            modal.querySelector("img").src = "img/teachers_Jonas.svg";
            modal.querySelector(".status span").textContent = data.bartenders[1].statusDetail;
        }

        if (e.target.id == "third") {
            modal.querySelector(".bartenderName span").textContent = data.bartenders[2].name;
            modal.querySelector("img").src = "img/teachers_Martin.svg";
            modal.querySelector(".status span").textContent = data.bartenders[2].statusDetail;
        }

        modal.style.display = "block";
    });

});

// Get the <span> element that closes the modal
let closeBTN = document.querySelector(".close");

// When the user clicks on (x), close the modal
closeBTN.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*-------------------------------------------
Make countdown til close 
------------------------------------------*/

// Set the date we're counting down to
var countDownDate = new Date("15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);