// Note to Gabe: DON'T BREAK SHIT!

// START Scroll to top button.
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("topButt").style.display = "block";
    }else{
      document.getElementById("topButt").style.display = "none";
    }
}

function topButt(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//END Scroll to top button.

//START Coming soon alert.
function comingSoon(){
    alert('Coming Soon!')
}
//END Coming soon alert.

//START Topnav mobile hamburger menu.
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//END Topnav mobile hamburger menu.
