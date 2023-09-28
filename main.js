function setup(){
    canvas=createCanvas(650,420)
    canvas.position(110,250);

    fill(204, 101, 192, 127);
  stroke(127, 63, 120);
    ellipse(240, 240, 80, 80);

    video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("modelloaded");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
}
    
}

function draw(){
  image(video,0,0,300,300);

fill('#fae');
    circle(100,300,100);
    fill('red')
    ellipse(100,270,70,70);
    fill('red')
    ellipse(100,220,70,70);
    fill('red')
    ellipse(100,170,70,70);
    fill('#fae');
    ellipse(100,120, 100, 100);
    fill('#fae');
    ellipse(540,120, 100, 100);
    fill('red');
    ellipse(540,170,70,70);
    fill('red');
    ellipse(540,220,70,70);
    fill('red');
    ellipse(540,270,70,70);
    fill('#fae');
    ellipse(540,300, 100, 100);
    size(200, 300); 
}



