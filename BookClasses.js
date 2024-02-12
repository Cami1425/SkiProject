/*  JavaScript 7th Edition
    Chapter 2
    Chapter case

    Life Ski
    Author: Camila Lopez
    Date:   February 11 2024

    Filename: jsProject.js
*/

// Submit button create massage to book _ use of Function
function onSubmit(){
    document.getElementById("msgContainer").style.display = "flex";
    let cost = calculateClassCost();
    document.getElementById('cost').textContent = cost
}

// Calculate class cost base on level, age, and duration
function calculateClassCost () {
    const classCostByLevel = {
        beginner: 20,
        intermediate: 40,
        advanced: 60
    }

    const classByAge = {
        adult: 40,
        child: 20
    }

    const classByDuration ={
        halfDay: 100,
        fullDay: 220
    }

    const level = document.getElementById("level").value;
    const age = document.querySelector("input[name='age']:checked").value;
    const duration = document.querySelector("input[name='duration']:checked").value;
    return classCostByLevel[level] + classByAge[age] + classByDuration[duration];
}

// Array list for instructors

let skiInstructors = [
    {name: "Michael Anderson", photo1: `<img alt='Ski instructor' src='images/skiInsturct00.png' />`, photo2: `<img alt=\'Ski instructor\' src=\'images/skiInsturct01.png\' />`, resort: 'Snowshoe Resort'},
    {name: "Kelly Shapiro", photo1: `<img alt='Ski instructor' src='images/skiInsturct10.jpeg' />`, photo2: `<img alt='Ski instructor' src='images/skiInsturct11.jpeg' />`, resort: 'Liberty Mountain Resort'},
    {name: "Jessie Hashburguer",photo1: `<img alt='Ski instructor' src='images/skiInsturct20.jpeg' />`, photo2: `<img alt='Ski instructor' src='images/skiInsturct21.jpeg' />`, resort: 'Snowshoe Resort'},
    {name: "Saba Mocoa", photo1: `<img alt='Ski instructor' src='images/skiInsturct30.jpeg' />`, photo2: `<img alt='Ski instructor' src='images/skiInsturct31.jpeg' />`, resort: 'Snowshoe Resort'},
    {name: "Trevor Walker", photo1: `<img alt='Ski instructor' src='images/skiInsturct40.jpeg'/>`, photo2: `<img alt='Ski instructor' src='images/skiInsturct41.jpeg' />`, resort: 'Liberty Mountain Resort'}
]

let snowboardInstructors = [
    {name: "Aria Prewitt", photo1: `<img alt='Snowboard instructor' src='images/snowboardInsturct00.jpeg' />`, photo2: `<img alt=\'Ski instructor\' src=\'images/snowboardInsturct01.jpeg\' />`, resort: 'Snowshoe Resort'},
    {name: "Gary Sage", photo1: `<img alt='Snowboard instructor' src='images/snowboardInsturct10.jpeg' />`, photo2: `<img alt='Ski instructor' src='images/snowboardInsturct11.jpeg' />`, resort: 'Liberty Mountain Resort'},
    {name: "Steven Douglas",photo1: `<img alt='Snowboard instructor' src='images/snowboardInsturct20.jpeg' />`, photo2: `<img alt='Ski instructor' src='images/snowboardInsturct21.jpeg' />`, resort: 'Snowshoe Resort'},
    {name: "Sandra Miller", photo1: `<img alt='Snowboard instructor' src='images/snowboardInsturct30.jpeg' />`, photo2: `<img alt='Ski instructor' src='images/snowboardInsturct31.jpeg' />`, resort: 'Snowshoe Resort'},
    {name: "Jimmy Sanders", photo1: `<img alt='Snowboard instructor' src='images/snowboardInsturct40.webp'/>`, photo2: `<img alt='Ski instructor' src='images/snowboardInsturct41.jpeg' />`, resort: 'Liberty Mountain Resort'}
]

// Check radio for Sport/ Ski or Snowboard
window.addEventListener("load", setUpSportRadio);
function setUpSportRadio() {
    console.log('setup')
    document.getElementById("skiSport").checked = false;
    document.getElementById("snowboardSport").checked = false;

    // Add event handlers for each selection
    document.getElementById("skiSport").onchange = onChangeSport;
    document.getElementById("snowboardSport").onchange = onChangeSport;

}

// Function onChange to display instructors on selector in htmlCode
function onChangeSport(e) {
    document.getElementById('gallery').innerHTML = '';
    if(e.target.value === "skiSport") {
        let htmlCode = "<option>select instructor:</option>";
        for(let i = 0; i < skiInstructors.length; i++) {
            let skiInst = skiInstructors[i];
            htmlCode += `<option value="skiSport-${i}">${skiInst.name}</option>`
        }
        document.getElementById('selectInstruct').innerHTML = htmlCode;
    } else {
        let htmlCode = "<option>select instructor:</option>";
        for(let i = 0; i < snowboardInstructors.length; i++) {
            let skiInst = snowboardInstructors[i];
            htmlCode += `<option value="snowboardSport-${i}">${skiInst.name}</option>`
        }
        document.getElementById('selectInstruct').innerHTML = htmlCode;
    }
}

// Function onChange to display inf of selected instructor
function onInstructorChange(e) {
    const value = document.getElementById('selectInstruct').value;
    let [sport, index] = value.split('-');
    if (sport === 'skiSport') {
        let instructor = skiInstructors[Number(index)];
        document.getElementById('gallery').innerHTML = instructor.photo1 + instructor.photo2;
    } else {
        let instructor = snowboardInstructors[Number(index)];
        document.getElementById('gallery').innerHTML = instructor.photo1 + instructor.photo2;
    }

}