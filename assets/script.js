const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments du DOM nécessaires
const carrouselImages = document.querySelectorAll('#banner .banner-img');
const dotsContainer = document.querySelector('#banner .dots');
  // const tagLine = document.querySelector('#banner p');
// Variable pour suivre l'index de la diapositive actuellement affichée
let currentSlideIndex = 0;

// Boucle pour créer un point pour chaque image du carrousel
slides.forEach((slide, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	// Ajout de la classe dot_selected pour le premier point (diapositive actuelle)
	if (index === 0) {
	  dot.classList.add('dot_selected');
	}
	// Ajout du point au conteneur des points du carrousel
	dotsContainer.appendChild(dot);
  });
  

// Sélection de tous les points du carrousel
const dots = document.querySelectorAll('#banner .dots .dot');
dots.forEach((dot, index) => {
  // event listener à chaque point
  dot.addEventListener('click', () => {
    // MaJ diapo en fonction de l'index du point cliqué
    currentSlideIndex = index;
    updateSlide(currentSlideIndex);
  });
});

// flèches du carrousel
const leftArrow = document.querySelector('#banner .arrow_left');
const rightArrow = document.querySelector('#banner .arrow_right');

//effet du click à la flèche gauche
leftArrow.addEventListener('click', () => {
  // changement du slide pour passer à la diapositive précédente
  changeSlides('prev');
});

//effet du click à la flèche droite
rightArrow.addEventListener('click', () => {
  // changement du slide pour passer à la diapositive suivante
  changeSlides('next');
});

console.log(carrouselImages, dotsContainer, leftArrow, rightArrow);