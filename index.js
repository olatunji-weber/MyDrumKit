
var buttons = document.querySelectorAll(".drum"); //returns an array of the button objects
for (var i = 0; i < buttons.length; i++){    //loop through the elements of the buttons array adding event listeners all through
  buttons[i].addEventListener("click", function(){
    var sound = new Audio("./sounds/tom-1.mp3");
    sound.play();
  });
}
