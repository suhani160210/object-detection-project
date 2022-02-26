img="";
status=""


function preload(){
    img=loadImage("")
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHtml="status:Detecting Objects";
}
function draw(){
    image(img,0,0,600,500);
    fill("#00008B");
    text("banana",40,60);
    noFill();
    stroke("#00008B");
    rect(30,40,400,500);

    fill("#00FF00");
    text("apples",310,110);
    noFill();
    stroke("#00FF00");
    rect(300,100,300,400);
}
function modelLoaded(){
    console.log("modelLoaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(result)
}
