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

// Sélection des flèches du carrousel
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