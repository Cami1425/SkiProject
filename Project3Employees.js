/*  JavaScript 7th Edition
    Chapter 2
    Chapter case

    Life Ski
    Author: Camila Lopez
    Date:   February 11 2024

    Filename: jsProject.js
*/

// Array of employees names
let employees = ["Michael Anderson", "Kelly Shapiro", "Jessie Hashburguer", "Saba Mocoa", "Trevor Walker"];

// Array of hours worked this week
let hoursWorked = [40, 45, 50, 60, 56];

// Calc salary for 40 hours and extra hours +40
function paySalary(employee, hoursWorked) {
    const baseRate = 18; // base rate first 40 hours
    const extraHoursRate = 20; // rate extra hours
    let salary = 0;
    if (hoursWorked <= 40) {
        salary = baseRate * hoursWorked;
    } else {
        salary = ((hoursWorked - 40) * extraHoursRate) + 40 * baseRate;
    }
    document.getElementById('salaryInfo').innerHTML = `
    <div>${employee}</div>
    <div>\$ ${salary}</div>
`
}

// Display employees in selector in htmlCode
let htmlCode = `<option value=''>Select employee:</option>`;
for(let i = 0; i < employees.length; i++) {
    htmlCode += `<option value='${i}'>${employees[i]}</option>`
}

document.getElementById("selectEmployee").innerHTML = htmlCode;

// Display salary for each employee
function onEmployeeChange() {
    const value = document.getElementById("selectEmployee").value;
    if (value !== '') {
        let name = employees[value];
        let hWorked = hoursWorked[value];
        paySalary(name, hWorked);
    } else {
        document.getElementById('salaryInfo').innerHTML = '';
    }

}