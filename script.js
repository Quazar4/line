function plotLine() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);
    var x3 = parseFloat(document.getElementById("x3").value);
    var y3 = parseFloat(document.getElementById("y3").value);
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    var scale = 10; // Adjust the scale as needed
    var offsetX = canvas.width / 2;
    var offsetY = canvas.height / 2;
  
    ctx.beginPath();
    ctx.moveTo(x1 * scale + offsetX, -y1 * scale + offsetY);
    ctx.lineTo(x2 * scale + offsetX, -y2 * scale + offsetY);
    ctx.lineTo(x3 * scale + offsetX, -y3 * scale + offsetY);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    var resultElement = document.getElementById("result");
    if (areCollinear(x1, y1, x2, y2, x3, y3)) {
      resultElement.textContent = "The points are collinear.";
    } else {
      resultElement.textContent = "The points are not collinear.";
    }
  }
  
  function areCollinear(x1, y1, x2, y2, x3, y3) {
    return (y1 - y2) * (x1 - x3) === (y1 - y3) * (x1 - x2);
  }
  
  window.onload = function() {
    var button = document.querySelector("button");
    button.addEventListener("click", plotLine);
  };
  
