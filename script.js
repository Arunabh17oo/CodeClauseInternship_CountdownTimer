let countdownInterval;

function startCountdown() {
  const eventTimeInput = document.getElementById("event-time").value;
  const eventTime = new Date(eventTimeInput).getTime();
  const currentTime = new Date().getTime();

  if (eventTime <= currentTime) {
    alert("Please select a future event time.");
    return;
  }

  clearInterval(countdownInterval); // Clear any previous countdown

  countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventTime - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Event started!";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
      document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

      if (distance <= 10000) {
        const music = document.getElementById("music");
        music.currentTime = 0;
        music.play();
      }
    }
  }, 1000);
}
