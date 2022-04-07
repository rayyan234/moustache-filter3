nosex=0;
nosey=0;

function preload(){
    moustache_img=loadImage('moustache.png')
}

function setup(){
canvas=createCanvas(400,400);
canvas.position(430,170);
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,400,400);
image(moustache_img,nosex,nosey,60,60);
}

function takesnapshot(){
    save('mysnapshot.png');
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x+30;
        nosey=results[0].pose.nose.y+50;
        console.log("the x coordinate of nose is "+nosex);
        console.log("the y coordinate of nose is "+nosey);
    }
    }