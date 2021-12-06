function preload(){

}

function setup(){
    canvas = createCanvas(450, 230);
    canvas.position(116, 253);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw(){
     fill("red");
     circle(40, 40, 50);
     fill("green");
     rect(32, 65, 13, 140);
     fill("green");
     rect(394, 55, 13, 140);
     fill("red");
     circle(400, 190, 50);
     fill("red");
     circle(39, 195, 50);
     fill("red");
     circle(400, 40, 50);
     fill("blue");
     rect(64, 193, 311, 13);
     fill("blue");
     rect(65, 30, 310, 13);
}

function take_snapshot(){
    save('your_picture.jpeg');
}