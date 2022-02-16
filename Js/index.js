//Scroll Suave


//Definir todos os itens da navbar como variavel
const navMenu = document.querySelectorAll ('.nav-item[href^="#"]');

//Adicionar evento para todos os elementos da Navbar ao clicar
navMenu.forEach(item => {
  item.addEventListener('click', ScrollToIdOnClick);
})
//Evento ao clicar
function ScrollToIdOnClick (event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector (id).offsetTop;

//Funcionamento do Scroll Suave
  window.scroll ({

    top: to,
    behavior: "smooth",
  });
}

//Carrossel

var slideIndex = 1;
showSlides(slideIndex);

// Controle Next / Prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle das imagens
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carrossel-imagens");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activated", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Botão Menu

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  const Menu = document.getElementById('menu');
  Menu.classList.toggle('active');
}

function closeMenu (){
  const btnMobile = document.getElementById ('btn-mobile');
  btnMobile.classList.toggle ('active')
} 

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('click', j);
