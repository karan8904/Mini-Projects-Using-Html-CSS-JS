//Getting HTML elements
let currentTime = document.querySelector('.normalTime');
let alarmItems = document.querySelector('.alarmTime');
let selectHour = document.getElementById('hour');
let selectMinute = document.getElementById('minute');
let selectAMPM = document.getElementById('ampm');
let setAlarmBtn = document.getElementById('setAlarmBtn');

let alarmTime, isAlarmSet,
ringtone = new Audio('ringtone.mp3');

//Current Time
setInterval(() => {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
   
    let ampm = h >= 12 ? "PM" : "AM";
    h = h > 12 ? (h - 12) : h;

    h = h == 0 ? h = 12 : h;

    h = h < 10 ? ("0" + h) : h;
    m = m < 10 ? ("0" + m) : m;
    s = s < 10 ? ("0" + s) : s;
 
    normalTime.innerText = `${h} : ${m} : ${s} ${ampm}`;

    //Checks if the current time is equal to the alarm time
    if(alarmTime === `${h} : ${m} ${ampm}`){
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);

//Adding options in select list
for(let i = 1; i < 13; i++){
    let opt = document.createElement('option');
    i = i < 10 ? ("0" + i) : i;
    opt.value = i;
    opt.innerHTML = i;
    selectHour.appendChild(opt);
}

for(let i = 0; i < 60; i++){
    let opt = document.createElement('option');
    i = i < 10 ? ("0" + i) : i;
    opt.value = i;
    opt.innerHTML = i;
    selectMinute.appendChild(opt);
}

for(let i = 0; i < 2; i++){
    let opt = document.createElement('option');
    let ampm = (i == 0 ? "AM" : "PM");
    opt.value = ampm;
    opt.innerHTML = ampm;
    selectAMPM.appendChild(opt);
}

//Button onclick event
const setAlarm = (e) => {

    e.preventDefault();
    
    if(isAlarmSet){
        alarmTime = " ";
        ringtone.pause();
        alarmItems.classList.remove("disabled");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    //Gets selected values from drop-down list and store it in time as a string
    let time = `${selectHour.value} : ${selectMinute.value} ${selectAMPM.value}`;

    //If the alarm time is not set, then returns an alert message 
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please select a valid time to set an Alarm!!")
    }
    
    alarmTime = time;
    isAlarmSet = true;
    alarmItems.classList.add("disabled");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener('click', setAlarm);