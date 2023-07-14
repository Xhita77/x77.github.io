function moveImage() {
    var img = document.getElementById("gif-img");
    var currentPosition = 0;
    var direction = 1; // 1 for moving down, -1 for moving up
    var speed = 2; // Adjust the speed of the movement
    
    setInterval(function() {
      currentPosition += direction;
      img.style.top = currentPosition + "px";
      
      if (currentPosition >= 10 || currentPosition <= -10) {
        direction *= -1;
      }
    }, speed);
  }
  
moveImage();

