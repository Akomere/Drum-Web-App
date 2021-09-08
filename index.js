var num = document.querySelectorAll(".drum").length;

for(var i = 0; i < num; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  var buttonHTML = this.textContent;

  switch (buttonHTML) {
    case "w":
            // var path = "C:\Users\User\Videos\WebDevelopment\Drum Kit Starting Files\sounds\tom-1.mp3";
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

    case "a":
            var tom2 = new Audio("sounds/tom1.mp3");
            tom2.play();
            break;

    case "s":
            var tom3 = new Audio("sounds/kickbass.mp3");
            tom3.play();
            break;

    case "d":
            var tom4 = new Audio("sounds/tom3.mp3");
            tom4.play();
            break;
    default:

  }
});

}

document.addEventListener("keydown", function(){
  console.log("key presses!")
});
