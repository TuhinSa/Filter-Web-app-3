mustache_x = 0;
mustache_y =0 ;
function preload(){
   mustache = loadImage("https://i.postimg.cc/jjx0TXXs/mustache.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet =ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is initizialed ");
}
function draw(){
    image(video, 0,0, 300,300);
    
    image(mustache, mustache_x,mustache_y, 30,30);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mustache_x = results[0].pose.nose.x;
        mustache_y = results[0].pose.nose.y;
        console.log("nose x = " + mustache_x);
        console.log("nose y = " + mustache_y);
    }
}
function takesnapshot() {
    save("filterImg.png")
}
