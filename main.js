song = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(450,100);

    canvas = createCanvas(500,500);
    canvas.position(700,75);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function Play(){
    song.play();
}