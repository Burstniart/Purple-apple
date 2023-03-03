console.log("Big titty goth gf!")

/* API Logic */
import './styles/app.css';
import UI from './UI.js';

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    ui.renderAppointments();
});

// Submit event to database via form
const appForm = document.getElementById("appoint-form");

appForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;

    // Create from object
    const formData = new FormData(appForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    
    const ui = new UI();
    ui.addAppoint(data);
    
})
/* Frontend logic*/

console.log("working")
let date = new Date();
const todaysDay = date.getDate();
const todaysMonth = date.getMonth();
const todaysWeekDay = date.getDay();
const year = date.getFullYear();

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const monthDays = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const htmlTodaysDay = document.querySelector('.todaysDay');
const htmlTodaysWeekDay = document.querySelector('.todaysWeekDay');
const htmlMonth = document.querySelector('.month');
const htmlYear = document.querySelector('.year');
const htmlDatesDiv = document.querySelector('.dates');
const htmlSelections = document.querySelector('#selections');

const howManyDaysInMonth = daysInMonth(todaysMonth, year);
const numWeek = getFirstDayInMonth(todaysMonth, year);


htmlTodaysDay.innerHTML = todaysDay;
htmlTodaysWeekDay.innerHTML = weekDays[todaysWeekDay];
htmlMonth.innerHTML = monthDays[todaysMonth];
htmlYear.innerHTML = year;


function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayInMonth(month, year) {
    return new Date(year, month).getDay();
}

function createElement(n, d) {
    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.className = 'number';
        div.innerHTML = '';
        htmlDatesDiv.append(div);
    }
    for (let i = 1; i <= d; i++) {

        let div = document.createElement('div');
        div.className = 'number';
        div.innerHTML = i;
        htmlDatesDiv.append(div);
    }
}
createElement(numWeek, howManyDaysInMonth);

const numbers = Array.from(document.querySelectorAll('.number'));

numbers.forEach(function (number) {
    if (number.innerHTML === todaysDay.toString()) {
        number.classList.add('today');
    }
});

function monthImg(monthImg) {
    const htmlConteiner = document.querySelector('.container');
    const htmlText = document.querySelector('.text');
    switch (monthImg) {
        case 1:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/XQDAnl6.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/n7j6Cjp.jpeg")';
            break;
        case 2:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/EVIgkGE.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/IpHPKxW.jpeg")';
            break;
        case 3:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/nl4ZJel.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/uHUGXVS.jpeg")';
            break;
        case 4:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/7HGRSb9.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/IE08fbo.jpeg")';
            break;
        case 5:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/QZ7Ozj7.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/2BQbc6r.jpeg")';
            break;
        case 6:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/ievhxTJ.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/JOKG0kZ.jpeg")';
            break;
        case 7:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/x6Kogol.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/X3ZaOHm.jpeg")';
            break;
        case 8:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/7T63tXj.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/3tD0egb.jpeg")';
            break;
        case 9:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/8i4Z0Eo.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/i7btxf5.jpeg")';
            break;
        case 10:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/7AvO2fc.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/96qIerI.jpeg")';
            break;
        case 11:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/NpDz38k.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/MgFPf3P.jpeg")';
            break;
        case 12:
            htmlConteiner.style.backgroundImage = 'url("https://i.imgur.com/RuRaNm9.jpeg")';
            htmlText.style.backgroundImage = 'url("https://i.imgur.com/5s7BvC0.jpeg")';
            break;
    }
}
monthImg(todaysMonth + 1);

htmlSelections.addEventListener('submit', function (e) {
    e.preventDefault();
    const htmlOptionsMonth = document.querySelector('#options-month');
    const htmlYearInput = document.querySelector('#year-input');

    if (htmlOptionsMonth.value != 'Month' && htmlYearInput.value != '') {
        date = new Date(`${htmlOptionsMonth.value} ${htmlYearInput.value}`);

        const newYear = parseInt(htmlYearInput.value);
        const newMonth = monthDays.indexOf(htmlOptionsMonth.value);

        const setMonthNum = daysInMonth(newMonth, newYear);
        const setWeekDay = getFirstDayInMonth(newMonth, newYear);
        htmlDatesDiv.innerHTML = '';
        htmlDatesDiv.innerHTML = `
            <div class="day">S</div>
            <div class="day">M</div>
            <div class="day">T</div>
            <div class="day">W</div>
            <div class="day">T</div>
            <div class="day">F</div>
            <div class="day">S</div>
        `;

        createElement(setWeekDay, setMonthNum);

        monthImg(newMonth + 1);

        document.querySelector('.text h2').style.display = 'none';
        htmlMonth.innerHTML = monthDays[newMonth];
        htmlYear.innerHTML = newYear;

    }
    htmlOptionsMonth.value = 'Month';
    htmlYearInput.value = '';

})


document.addEventListener("click", function(event){
    if(event.target.className === "number" || event.target.className === "number today") {
        // gets the right month number and pads it as well as the day
        let fixedMonth = padZero(monthDays.indexOf(htmlMonth.innerText) + 1);
        let fixedDay = padZero(event.target.innerText);
        // formats the full clicked date
        let fixedDate = `${htmlYear.innerText}-${fixedMonth}-${fixedDay}`;

        document.querySelector('#day').value = fixedDate;
        openForm();
    }
})
// Converts number to string and pads with '0' if len of num is 1, returning a len 2 number to work with date value
const padZero = function(padNum) {
        padNum = `${padNum}`;
        padNum = padNum.padStart(2, '0');
        return padNum;
}

const closeBtn = document.querySelector('.btn');

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 

