let h = document.querySelector('.clock-hour');
let m = document.querySelector('.clock-minute');

let hour = new Date();

function updateWatch(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();

    let strhour = new String(hour);
    let strminute = new String(minute);

    if(strminute.length ==1) minute = "0" + minute;
    if(strhour.length ==1) hour = "0" + hour;

    h.textContent = hour;
    m.textContent = minute;

    setTimeout("updateWatch()",1000);
}

