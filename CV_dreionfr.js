function setup() {
    createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBG);
    

  
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function draw(){}