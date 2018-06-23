class Player{
constructor(){
this.x = 30;
this.y = 30;
this.size = 50;
this.side = "down"
}
render(){
fill(255)
rect(this.x,this.y,this.size,this.size);
if (keyIsDown(DOWN_ARROW)) {
    this.y += 5;
    this.side = "down"
  }
  if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
      this.side = "up"
    }
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
        this.side = "right"
      }
      if (keyIsDown(LEFT_ARROW)) {
          this.x -= 5;
          this.side = "left"
        }
        //SHOOT
  if (keyIsDown(32)) {

bullets.push(new Bullet(this.side))

}
}



collsion(enemyX,enemyY,size){
if(this.x > enemyX && this.x < enemyX + size || this.x+this.size > enemyX && this.x+this.size < enemyX + size){
  if(this.y > enemyY && this.y < enemyY + size || this.y+this.size > enemyY && this.y+this.size < enemyY + size){
    return true;
  }
}

}



}
