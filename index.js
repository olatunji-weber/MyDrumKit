
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

var buttons = document.querySelectorAll(".drum"); //returns an array of the button objects
for (var i = 0; i < buttons.length; i++){    //loop through the elements of the buttons array adding event listeners all through
  buttons[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}


function makeSound(x){
  switch (x) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    default: alert("You Clicked or Pressed " + this.innerHTML);
  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  // document.querySelectorAll("button")[0].classList.add("pressed");
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
