let mybutton = document.getElementById('bkTop');

console.log('script js loaded');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >  window.innerHeight / 2 || document.documentElement.scrollTop >  window.innerHeight / 2) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }
