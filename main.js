status="";
objects=[];

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Person"
}

function draw(){
    image(video,0,0,380,380);
    if(status != "") 
    { objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "Status : Deteced Baby";
    fill("#FF0000"); 
    percent = floor(objects[i].confidence * 100); 
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
    noFill();
    stroke("#FF0000"); 
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

if(objects[i].label==person){
    document.getElementById("number_objects").innerHTML="Baby Found";
}
else{
    document.getElementById("number_objects").innerHTML="Baby Not Found";
}
}
}
}

function modelloaded(){
    console.log("model is loaded");
    status=true;
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}