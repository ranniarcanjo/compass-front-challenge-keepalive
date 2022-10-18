// const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title")
const modalBody = document.querySelector("#modal-body");
const fade = document.querySelector("#fade");
const btnLogout = document.querySelector("#link-logout");
const timeSeconds = document.querySelector(".time");
const btnYesHome = document.querySelector("#btn-yes-home");
const btnYesLogout = document.querySelector("#btn-yes-logout");
const btnNo = document.querySelector(".btn-no");


const getLogin = () => JSON.parse(localStorage.getItem('userLogin')) ?? {};

var userLogin = localStorage.getItem('userLogin');

let h = document.querySelector('.watch');
let hour = new Date();

let weekHtml = document.querySelector('.date');
let day = document.querySelector('.date-day');
let month = document.querySelector('.date-month');
let year = document.querySelector('.date-year');
let fullDate = new Date();

let city = document.querySelector('.city')
let temperature = document.querySelector('.climate')

//Link logout
btnLogout.addEventListener('click', () => {
    btnYesHome.classList.toggle("diplay-none");
    countRefresh(30);
    toggleModal("Fazer Logout", "Deseja realmente fazer logout?");
})

btnYesHome.addEventListener('click', () =>{
    countRefresh(); 
})

btnYesLogout.addEventListener('click', () =>{
    localStorage.removeItem('userLogin');
    window.location.href = "/";
})





function updateWatch(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let strhour = new String(hour);
    let strminute = new String(minute);
    if(strminute.length ==1) minute = "0" + minute;
    if(strhour.length ==1) hour = "0" + hour;
    let hourExtense = hour + ":" + minute;
    h.textContent = hourExtense;
    setTimeout("updateWatch()",1000);
}

function searchDate(){
    let week = fullDate.getDay();
    let day = fullDate.getDate();
    let month = fullDate.getMonth()+1;
    let year = fullDate.getFullYear();
    let strDay = new String(day);
    let strMonth = new String(month);
    if(strDay.length == 1) mes = '0' + day;
    if(strMonth.length == 1) mes = '0' + month;

    switch(week) { case 0:
            week = "Domingo"
            break;
        case 1:
            week = 'Segunda-feira'
            break;
        case 2:
            week = "Terça-feira"
            break;
        case 3:
            week = 'Quarta-feira'
            break;
        case 4:
            week = "Quinta-feira"
            break;
        case 5:
            week = 'Sexta-feira'
            break;
        case 6:
            week = "Sábado"
            break;
    }

    switch(month){
        case 1:
            month = "janeiro"
            break;
        case 2:
            month = "Fevereiro"
            break;
        case 3:
            month = "Março"
            break;
        case 4:
            month = "Abril"
            break;
        case 5:
            month = "Maio"
            break;
        case 6:
            month = "Junho"
            break;
        case 7:
            month = "julho"
            break;
        case 8:
            month = "agosto"
            break;
        case 9:
            month = "Setembro"
            break;
        case 10:
            month = "Outubro"
            break;
        case 11:
            month = "Novembro"
            break;
        case 12:
            month = "Dezembro"
            break;
    }

    let Week = week + ', ' + day + ' de ' + month + ' de ' + year;
    weekHtml.textContent = Week;
}

function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`
      fetchApi(url)
    })
  }
  
function fetchApi(url) {
    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
        city.textContent      = data.name + " - PI"
        temperature.innerHTML = tempInCelsius
    })
}


const toggleModal = (title, msg) => {

    modalTitle.innerHTML = title;
    modalBody.innerHTML = msg;

    [modal, fade].forEach((el) =>el.classList.toggle("hide"));
};

[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


let time = 30;
 
function countRefresh(temp) {
    if ((time - 1) >= -1) {
        time = time;
        horaImprimivel = time;
        timeSeconds.textContent = horaImprimivel;
        setTimeout('countRefresh()', 1000);
        time--;
    } 
    else {
        btnYesLogout.classList.toggle("diplay-none");
        toggleModal("Aviso", "Seu tempo acabou, deseja continuar na página home?");   
    }

}

countRefresh();  
getUserPosition();
searchDate()


