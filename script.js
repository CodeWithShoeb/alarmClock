

    const currTime = document.querySelector("h1"),

    content = document.querySelector(".content"),

    selectMenue = document.querySelectorAll("select"),

    setAlarmBtn = document.querySelector("button");


let alarmTime, isAlarmSet = false,
    ringtone = new Audio('a1.mp3');


for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectMenue[0].firstElementChild.insertAdjacentHTML("afterend", option);
}


for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectMenue[1].firstElementChild.insertAdjacentHTML("afterend", option);
}



for (let i = 2; i > 0; i--) {

    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenue[2].firstElementChild.insertAdjacentHTML("afterend", option);

}

setInterval(() => {
    //getting hour, min, sec
    let date = new Date()
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    //If hour value is 0, set this value to 12
    h = h == 0 ? h==12 : h;

    //adding 0 before hr, min, sec, if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    currTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m} ${ampm}`) {
  
        console.log('Alarm is ringing.....')

        ringtone.play();
        ringtone.loop = true;//For every time take true to ringtone
    }

}, 1000)

function setAlarm() {

    if (isAlarmSet) {// if isAlarmSet is true
        alarmTime = "";//Clear the value of alarmTime
        ringtone.pause();//pause the ringTone
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;//return isalarmSet value to false.
    }


    //getting hour, minute, ampm, select tag value
    let time = `${selectMenue[0].value}:${selectMenue[1].value} ${selectMenue[2].value}`

    //console.log(time)

    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please select valid time to set alarm!!")
    }

    isAlarmSet = true;

    alarmTime = time;
    content.classList.add("disable");

    setAlarmBtn.innerText = "Clear Alarm"//for option as clear alarm in same button after
    //  clicking




}

setAlarmBtn.addEventListener("click", setAlarm);




