class Enemy{


  constructor(){
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.size = 5;
  }

  render(){

    fill(255,0,0)
    rect(this.x,this.y,this.size,this.size);
   this.x += random(-5,5);
   this.y += random(-5,5);
  }

}
