/* *************************************
	  Web III Final

Author by: Brent - brent@milkshakeinteractive
Date: June 8th 2016

* *************************************/

$(document).ready(function() {

  $('.oneup').fadeOut(10);

  var player = 0;

  // Create an audio object
  var obj = document.createElement        ("audio");
  obj.src =  "https://dl.dropboxusercontent.com/u/38033202/Final/SuperMarioMushroom.mp4";
  obj.volume = 0.30;
  obj.autoPlay = false;
  obj.preLoad = true;


 // Detect keyboard imput - spacebar
 $('html').keypress(function(e) {

  if (e.keyCode === 32) {
    // play sound
    obj.play();
    // add score to page
    player += 1;
    $('#player_score').html(player);

    // console.log(e.keyCode + " You earned one additional Mario! " + player);

   // Show ONe up mushroom then fade it out
    $('.oneup').fadeIn(400).delay("slow").fadeOut();
  } // end if

}); // end keypress function 
});
