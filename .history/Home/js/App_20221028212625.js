function sendEmail() {
    
    Email.send({
        secureToken: "0ab2dd1a-b4d4-40d2-90bc-3ed827907c01",
        To : 'hieunm14092001@gmail.com',
        From : document.getElementById('footer-contact__email').value,
        Subject : document.getElementById('footer-contact__message').value,
        Body : "Name: " +document.getElementById('footer-contact__name').value
        + "<br> Email: " + document.getElementById('footer-contact__email').value
        + "<br> Phone: " + document.getElementById("footer-contact__phone").value 
        + "<br> Message: " + document.getElementById("footer-contact__message").value 
    }).then(
      message => alert("message Succesfully")
    );
}

//  time

function timeLives() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let minut = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();
  let session = document.getElementById('session');

  if(hrs >= 12) {
      session.innerHTML = 'PM'
  }
  else{
      session.innerHTML = 'AM'
  }
  if(minut < 10) {
      document.getElementById('minutes').innerHTML = "0" + minut;
  }

  if(minut >= 10) {
      document.getElementById('minutes').innerHTML = minut;
  }

  if(seconds < 10) {
  document.getElementById('seconds').innerHTML = "0" + seconds;
  }
  if(seconds >=10) {
      document.getElementById('seconds').innerHTML = seconds;
  }

  if(hrs < 10) {
      document.getElementById('hours').innerHTML = "0" + hrs;
  }
  if(hrs >= 10) {
      document.getElementById('hours').innerHTML = hrs;
  }

}
setInterval(timeLives, 10);

// scroll to top

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if(pos>500) {
      scrollProgress.style.display = "grid";

  }else{
      scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });

scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;