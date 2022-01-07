song1="My heart will go on(Original Celine Dion).mp3";
song2="Summer of 69(Bryan Adams).mp3";

rightWristY=0;
leftWristY=0;

rightWristX=0;
leftWristX=0;

difference=0;
function preload()
{
    rightWrist=loadSound(song1);
    leftWrist=loadSound(song2);
}

function setup()
{
    canvas=createCanvas(348,512);
    canvas.position(211,201);

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 391, 293);
}

function playMusic()
{
    song.play();
}

function modelLoaded()
{
    console.log("Model loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist X= " + rightWristX + " Right wrist Y= " + rightWristY);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist X= " + leftWristX + " Left wrist Y= " + leftWristY);
    }
}