 drawings = []
  db_drawing = [] 
start = false;

function setup() {
    var canvas = createCanvas(400,400);
    database = firebase.database();

    background(0);
}

function draw() {
    
if(start){
    db_drawing.push(createVector(mouseX,mouseY));
}
    
    stroke(255);
    strokeWeight(4);
    noFill();
        beginShape();
        for (var i = 0; i < db_drawing.length; i++) {
             vertex(db_drawing[i].x, db_drawing[i].y); 
             endShape();

             }
    

  

}
function mousePressed() { 
    start = true;
  //  var point = { 
    //    x: mouseX, 
      //  y: mouseY 
    //}
    // drawings.push(point); 
     var drawingRef = database.ref('drawing') 
     var data = {
         x:mouseX,
         y:mouseY
     }
     drawingRef.push(data);
    }
function mouseReleased() {
    start = false;
}