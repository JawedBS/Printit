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
let position = 0
let image = document.querySelector("#banner .banner-img")
let tagLine = document.querySelector("#banner p")
let arrow_left = document.querySelector("#banner .arrow_left")

let dots = document.querySelector("#banner .dots")
for (let i=0; i<slides.length; i++){
	let nouvelleDiv = document.createElement("div")
	dots.appendChild(nouvelleDiv)
	nouvelleDiv.classList.add("dot")
}
let dot = document.querySelectorAll("#banner .dot")
console.log(dot)
dot[0].classList.add("dot_selected")
arrow_left.addEventListener("click", function(){
	if (position==0) {
		position= slides.length-1
	} 
	else {
		position= position-1
	}
	image.src="./assets/images/slideshow/" + slides[position].image;
	tagLine.innerHTML= slides[position].tagLine
	for (let i=0; i<dot.length; i++){
		if (i==position) {
			dot[i].classList.add("dot_selected")
		}
		else {
			dot[i].classList.remove("dot_selected")
		}
	}
})
let arrow_right = document.querySelector("#banner .arrow_right")
arrow_right.addEventListener("click", function(){
	if (position==slides.length-1) {
		position=0
	} 
	else {
		position= position+1
	}
	image.src="./assets/images/slideshow/" + slides[position].image;
	tagLine.innerHTML= slides[position].tagLine
	for (let i=0; i<dot.length; i++){
		if (i==position) {
			dot[i].classList.add("dot_selected")
		}
		else {
			dot[i].classList.remove("dot_selected")
		}
	}
})


