addEventListener('DOMContentLoaded', (event) => {
  let orarPage = document.getElementsByClassName('orar');
  console.log(orarPage);
  if(orarPage.length !== 0)
  {
    // Este pagina de orar
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tab = urlParams.get('open-to');
    if(tab.length !== 0)
    {
      let elements = document.querySelectorAll('.optiunicontent')
      console.log(elements);
      elements.forEach(function(el){
        el.style.display = 'none';
      }) 
      
      let activeItem = document.getElementById(tab);
      activeItem.style.display = 'block';
    }
  }

});



const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  document.getElementById("navbar").style.top = "0";
} else {
  document.getElementById("navbar").style.top = "-90px";
}
}


function myFunction() {
  var dots = document.getElementsByName("read");
  var moreText = document.getElementsByName("more");
  var btnText = document.getElementsByClassName("btnText");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Citeste mai mult";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Citeste mai putin";
    moreText.style.display = "inline";
  }
}


function openMod(evt, cityName) {
  var i, optiunicontent, optiunilinks;
  optiunicontent = document.getElementsByClassName("optiunicontent");
  for (i = 0; i < optiunicontent.length; i++) {
    optiunicontent[i].style.display = "none";
  }
  optiunilinks = document.getElementsByClassName("optiunilinks");
  for (i = 0; i < optiunilinks.length; i++) {
    optiunilinks[i].className = optiunilinks[i].className.replace(" active", "");
  }
  
  var i, optiunicontent1, optiunilinks1;
  optiunicontent1 = document.getElementsByClassName("optiunicontent1");
  for (i = 0; i < optiunicontent1.length; i++) {
    optiunicontent1[i].style.display = "none";
  }
  optiunilinks1 = document.getElementsByClassName("optiunilinks1");
  for (i = 0; i < optiunilinks1.length; i++) {
    optiunilinks1[i].className = optiunilinks1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


var modal = document.getElementById('form');

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}






  





 

  