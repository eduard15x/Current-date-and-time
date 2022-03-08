window.onload = setInterval(myClock, 1000);

function myClock() {


    const myDate = new Date();

    let day = myDate.getDay();

    let month = myDate.getMonth();
    let montharr = [
                    'January', 'February', 'March', 'Aprill', 
                    'May', 'June', 'July', 'August', 'September', 
                    'Octomber', 'November', 'December'];
    month = montharr[month];

    let year = myDate.getFullYear();

    let hour = myDate.getHours();

    let min = myDate.getMinutes();

    let sec = myDate.getSeconds();


    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;



}

myClock();














