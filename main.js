img = "";
status = "";
function preload() {
    img = loadImage("Bedroom.jpeg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectdetector.detect(img, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
     console.log(error);
    }
     console.log(results);
 }
 function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Left side of bedroom", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Right side of bedroom", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}