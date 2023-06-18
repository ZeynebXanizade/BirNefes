ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });


ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top'}); 
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 }); 


//
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthday = "18 July 2023";

function countDown() {
    const birthdayDate = new Date(birthday)
    const currentDate = new Date()

    const totalSecond = (birthdayDate - currentDate) / 1000

    const days = Math.floor(totalSecond / 3600 / 24)
    const hours = Math.floor(totalSecond / 3600) % 24
    const mins = Math.floor(totalSecond / 60) % 60
    const seconds = Math.floor(totalSecond % 60)



    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`
    } else {
        return time
    }
}



countDown();

setInterval(countDown, 1000);