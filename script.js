let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar','.gradient-btn');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

var typed= new Typed(".text", {
    strings:["Database Administrator", "System Analyst", "Data Analyst", "Frontend Developer" , "UI/UX Design", "Web Developer", "Quality Assurance", "Data Scientist"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const track = document.querySelector('.certification-track');

// auto duplicate
track.innerHTML += track.innerHTML;

let position = 0;
const speed = 0.5; // makin besar makin cepat

function animate() {
  position -= speed;

  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();

let isPaused = false;

track.addEventListener('mouseenter', () => isPaused = true);
track.addEventListener('mouseleave', () => isPaused = false);

function animate() {
  if (!isPaused) {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
  }
  requestAnimationFrame(animate);
}


function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phonenumber : document.getElementById("phonenumber").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_k0nzyzk","template_idvxlh6",parms).then(alert("Email Sent!"))
}


