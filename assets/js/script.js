let h = document.querySelector('.watch');
let hour = new Date();

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

let weekHtml = document.querySelector('.date');
let day = document.querySelector('.date-day');
let month = document.querySelector('.date-month');
let year = document.querySelector('.date-year');
let fullDate = new Date();

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





searchDate()


