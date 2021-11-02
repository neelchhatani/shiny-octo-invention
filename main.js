screen_width = 0;
screen_height = 0;
speak_data = "";
draw_apple = "";
to_number = 0;
var SpeechRecognition = window.webkitSpeechRecognition;
function preload(){
laptop = loadImage("mango.jpg");
}
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number)){
document.getElementById("status").innerHTML = "The mango has started to draw ";
draw_apple = "set";
    }
    else{
    document.getElementById("status").innerHTML = "We couldn't reconize the number"
    }
  }
function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(1000,600);
 canvas.position(100,100);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Mangoes drawn";
    draw_apple = "";
    for(var i = 1; i <= to_number; i++){
    x = Math.floor(Math.random()*700);
    y = Math.floor(Math.random()*400);
    image(laptop,x,y,100,100);
    }
    speak_data = to_number + "drawing mangoes";
    speak();
    }
  }
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
