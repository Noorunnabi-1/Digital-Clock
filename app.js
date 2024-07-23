const getTime = () => {
    let date = new Date();

    let hour = date.getHours();
    let amPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour == 0 ? 12 : hour;

    let minute = date.getMinutes();
    minute = minute > 9 ? minute : '0' + minute;

    let second = date.getSeconds();
    second = second > 9 ? second : '0' + second;

    let miliSec = date.getMilliseconds();
    miliSec = miliSec > 9 ? miliSec : '0' + miliSec;


    return `${hour} : ${minute} : ${second} : ${miliSec}  ${amPm}`;

    //     // short method 
    // return date.toLocaleTimeString();
};

setInterval(() => {
    // console.log(getTime());
    let clockObj = document.querySelector('.clock');
    clockObj.innerHTML = getTime();
}, 500);