noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(600,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    }
    
    
    function modelLoaded(){
        console.log("posenet model has been initialized");
    
    }

    function draw(){
    background("grey");
    textSize(difference);
    fill("yellow");
    text('Aarush', 50, 400)
    }

    
    
    function gotPoses(results){
  if(results.length > 0){
      console.log(results);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference= floor(leftWristX - rightWristX);  
  }
     
        }
        

      
 
    