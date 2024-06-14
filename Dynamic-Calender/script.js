let currentDate = document.querySelector(".current-date");
let days = document.querySelector(".days");
const prevNextIcons = document.querySelectorAll(".icons span");

let date = new Date();
let currYear = date.getFullYear();  // current year
let currMonth = date.getMonth();    // cuyrrent month


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const renderCalender = () => {
    let firstDayOfMonth = new Date(currYear,currMonth,1).getDay(); // getting first day of the month
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of the month;
    let lastDayOfMonth = new Date(currYear,currMonth,lastDateOfMonth).getDay(); // getting last day of month
    let lastDateOfLastMonth = new Date(currYear,currMonth,0).getDate(); //getting last date of previous month

    let liTag = "";

    // showing previous month last dates
    for(let i = firstDayOfMonth; i>0; i--){
        liTag += `<li class="inactive">${lastDateOfLastMonth - i +1}</li>`;
    }

    // showing current months dates
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                        && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // showing next month first dates if the blocks is available
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    days.innerHTML = liTag;
}
renderCalender();

prevNextIcons.forEach(icon =>{
    icon.addEventListener('click',() =>{
        currMonth = icon.id === 'prev' ? currMonth -1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear,currMonth)
            currYear = date.getFullYear(); //updating current year with new date year
            currMonth = date.getMonth();// updating current month with new date month
        }else{
            date  = new Date()
        }
        renderCalender(); 
    })
})