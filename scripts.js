    $(document).ready(function(){
      $('.slideshow').slick({
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        speed: 2000,
        centerMode: true,
        responsive: [
    {
      breakpoint: 600,
      settings: {
        variableWidth: true,
        autoplay: true,
        arrows: false,
        fade: false,
        variableWidth: false,
        centerMode: false,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 1,
        speed: 500
      }
    }
  ]
  });
});

// Set the date we're counting down to
var countDownDate = new Date("Oct 10, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = "Launching in " + days + " days and " + hours + " hours.";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").textContent = " soon.";
  }
}, 1000);