/*  JavaScript 7th Edition
    Chapter 2
    Chapter case

    Life Ski
    Author: Camila Lopez
    Date:   February 4 2024

    Filename: jsProject.js
*/

//add event handlers to the list items
let skiEl = document.getElementById("ski");
let snowboardEl = document.getElementById("snowboarding");
let parkEl = document.getElementById("park");

skiEl.onclick = createOnClick("images/Skiing.JPG");
snowboardEl.onclick = createOnClick("images/Snowboarding.jpg");
parkEl.onclick = createOnClick("images/Park.jpg");


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

// Submit button create massage to book _ use of Function
function onSubmit(){
    document.getElementById("msgContainer").style.display = "flex";
    let cost = calculateClassCost();
    document.getElementById('cost').textContent = cost
}

// Calculate class cost base on level and age
function calculateClassCost () {
    const classCostByLevel = {
        beginner: 100,
        intermediate: 150,
        advanced: 200
    }

    const classByAge = {
        adult: 50,
        child: 20
    }

    const level = document.getElementById("level").value;
    const age = document.querySelector("input[name='age']:checked").value;
    return classCostByLevel[level] + classByAge[age];
}






