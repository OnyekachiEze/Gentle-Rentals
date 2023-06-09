let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')

}


// const sr = ScrollReveal ({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true
// })

// sr.reveal('.text' ,{delay: 200, origin: 'top'})
// sr.reveal('.form-container form' ,{delay: 800, origin: 'left'})
// sr.reveal('.heading' ,{delay: 800, origin: 'top'})
// sr.reveal('.ride-container .box' ,{delay: 600, origin: 'top'})
// sr.reveal('.services-container .box' ,{delay: 600, origin: 'top'})
// sr.reveal('.about-container .box' ,{delay: 600, origin: 'top'})
// sr.reveal('.reviews-container' ,{delay: 600, origin: 'top'})
// sr.reveal('.newsletter .box' ,{delay: 400, origin: 'bottom'})



const sr = ScrollReveal ({
    distance: '100px',
    duration: 250,
    delay: 400,
    reset: true
})

sr.reveal('.text' ,{delay: 600, origin: 'top'})
sr.reveal('.form-container form' ,{delay: 500, origin: 'left'})
sr.reveal('.heading' ,{delay: 600, origin: 'top'})
sr.reveal('.ride-container .box' ,{delay: 600, origin: 'top'})
sr.reveal('.services-container .box' ,{delay: 600, origin: 'top'})
sr.reveal('.about-container .box' ,{delay: 600, origin: 'top'})
sr.reveal('.reviews-container' ,{delay: 600, origin: 'top'})
sr.reveal('.newsletter .box' ,{delay: 400, origin: 'bottom'})




function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }