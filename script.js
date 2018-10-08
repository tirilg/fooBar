"use strict";

function init() {

    //setInterval(update, 5000); //Runs several times
    setTimeout(update, 5000);

}
init();

function update() {
    let data = JSON.parse(FooBar.getData())
    console.log(data);
    handleBartenders(data.bartenders)
}
function handleBartenders(bartenders) {
    console.log(bartenders)
}