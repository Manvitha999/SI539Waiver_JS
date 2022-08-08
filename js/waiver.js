// ------------------------------------------problem : 1-----------------------------------------------------------------------------

var fig= document.querySelectorAll('figure');
for (let elem of fig) {
    elem.classList.add('one-third');
}


// ---------------------------------------------------------problem : 2 ---------------------------------------------------------------

document.querySelector('footer').addEventListener("click", disp);

function disp() {
  document.querySelector('footer').remove();
}


// ----------------------------------------------------------------problem : 3 --------------------------------------------------------

fig[4].addEventListener('dblclick',hide);

function hide()
{
fig[4].style.visibility='hidden';

}

// ----------------------------------------------------------- for both problem 4 and 5 -------------------------------------------------------
var capt=document.querySelectorAll('figcaption');
var fonto=capt[0].getAttribute("font-style");

// ----------------------------------------------------------- problem : 4 -------------------------------------------------------

capt[0].onmouseover=capt[0].onmouseout=handler;
function handler(event) {

 

  if (event.type == 'mouseover') {
    event.target.style.fontStyle = "italic";
  }
  if (event.type == 'mouseout') {
    event.target.style.fontStyle=fonto;
  }
}


// ----------------------------------------------------------- problem : 5 -------------------------------------------------------


let c=false;
document.onkeydown=document.onkeyup=tab;
function tab(event) {

  var code = event.keyCode || event.which;

  if (event.type == 'keydown' && code === 9 && c===false) {
    capt[0].style.fontStyle = "italic";
    capt[0].style.border='2px solid blue';
    capt[0].focus();
    
  }
  if (event.type == 'keydown' && code === 9 && c===true) {
    capt[0].style.fontStyle=fonto;
    capt[0].style.border='none';
    c=false;
    
  }
  if (event.type == 'keyup' && code === 9) {
    
    c=true;

  }
}