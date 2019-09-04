//Hide Show Navbar Scroll Effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

//Dropdown Toggle
function myDivOpen() {
	
var dropdown = document.getElementById('myDIV');

	if (dropdown.style.display =='block')
		dropdown.style = 'none';
	else
		dropdown.style.display = 'block';
}

//Dropdown Toggle
function myDivOpen2() {
	
var dropdown2 = document.getElementById('myDIV2');

	if (dropdown2.style.display =='none')
		dropdown2.style = 'block';
	else
		dropdown2.style.display = 'none';
}

//Full Screen Mobile Nav
function openNav() {
  document.getElementById("myNav").style.display = "block";
}
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

//Scrolling Image Efects
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 800/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

//Pie Chart 
function frontEnd() {
		document.getElementById ('chart').src="pie35.png";
}
function frontEndout() {
		document.getElementById ('chart').src="pie-chart.png";
}
function webDev() {
		document.getElementById ('chart').src="pie40.png";
}
function webDevout() {
		document.getElementById ('chart').src="pie-chart.png";
}
function UI() {
		document.getElementById ('chart').src="pie25.png";
}
function UIout() {
		document.getElementById ('chart').src="pie-chart.png";
}

function dropPie() {
var dropPie = document.getElementById('frontPie');
	if (dropPie.style.display =='block')
		dropPie.style = 'none';
	else
		dropPie.style.display = 'block';
}
function dropPie2() {
var dropPie2 = document.getElementById('webPie');
	if (dropPie2.style.display =='block')
		dropPie2.style = 'none';
	else
		dropPie2.style.display = 'block';
}
function dropPie3() {
var dropPie3 = document.getElementById('UIPie');
	if (dropPie3.style.display =='block')
		dropPie3.style = 'none';
	else
		dropPie3.style.display = 'block';
}
