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
