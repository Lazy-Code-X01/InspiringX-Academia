// code to display the countdown timer to april 1st 2023
var countdownDate = new Date("2023/04/01");


setInterval(function() {
  var now = new Date().getTime();
  var timeRemaining = countdownDate.getTime() - now;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);


// grabbing the button to scroll down to register Section
const getStarted = document.querySelector('.btn')

// onclick event
getStarted.addEventListener('click', () => {
    location.href = '#reg'
})

// faq
const faqItems = document.querySelectorAll('.faq-section .question');

faqItems.forEach(item => {
  const button = item.querySelector('button');
  const answer = item.querySelector('.answer');

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;

    button.setAttribute('aria-expanded', !expanded);
    answer.setAttribute('aria-expanded', !expanded);
  });
});
