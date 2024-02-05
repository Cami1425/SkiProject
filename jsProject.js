/*  JavaScript 7th Edition
    Chapter 1
    Chapter case

    Life Ski
    Author: Camila Lopez
    Date:   January 28 - 2024

    Filename: jsProject.js
*/

//add event handlers to the list items
let skiEl = document.getElementById("ski");
let snowboardEl = document.getElementById("snowboarding");
let parkEl = document.getElementById("park");

skiEl.onclick = createOnClick("images/Skiing.JPG");
snowboardEl.onclick = createOnClick("images/Snowboarding.jpg");
parkEl.onclick= createOnClick("images/Park.jpg");


// create event handler - on click- to images
function createOnClick(url) {
    return () => {
        document.getElementById("full-image").src = url;
        document.getElementById('image-viewer').style.display = 'flex';
    }
}

// Close images with event handler on click
document.getElementById("closeButton").onclick = function () {
    document.getElementById('image-viewer').style.display = null;
}






