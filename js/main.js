//Store elements for end animation
let videoTextTop = document.getElementsByClassName("videoTextTop")[0];
let videoText = document.querySelectorAll(".videoText")[0];
let backgroundBlue = document.querySelectorAll(".backgroundBlue")[0];

//Item carousel
let mySlides = document.querySelectorAll('#slider .slide');
let myBackground = document.getElementById('slider');
let x = 1;
myBackground.setAttribute('data-pan', x);
mySlides[0].classList.add('active');
var slideLoop = setInterval(function(){
  if(x == mySlides.length){
    clearInterval(slideLoop);
    videoTextTop.classList.add("active");
    videoText.classList.add("active");
    setTimeout(function(){
      backgroundBlue.classList.add("active");
    }, 5000);
  }
  else{
    mySlides[x].classList.add('active');
    if(mySlides[x - 1]) mySlides[x - 1].classList.add('inactive');
    x++;
    myBackground.setAttribute('data-pan', x);
  }
}, 2000);

//Number switcher
let switchNumber = document.querySelectorAll(".switchNumber span");
switchNumber[0].classList.add("active");
let i = 1;
//Loop through all values
setInterval(function() {
  if (switchNumber[i].classList.contains("final")) {
    if(switchNumber[i-1]) switchNumber[i-1].classList.add("inactive");
    switchNumber[i].classList.add("active");
    clearInterval();
  } else {
    if(switchNumber[i-1]) switchNumber[i-1].classList.add("inactive");
    switchNumber[i].classList.add("active");
    i++;
  }
}, 1000);
