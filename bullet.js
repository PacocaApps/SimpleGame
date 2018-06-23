class Bullet{


  constructor(direction){
  this.x = player.x + 20
  this.y =  player.y + 20
  this.size = 10;
  this.bulletSpeed = 8;
 this.direction = direction;

  }

  render(){

    fill(0,255,0)
    rect(this.x,this.y,this.size,this.size);
    if(this.direction === "up"){
  this.y -= this.bulletSpeed
    }
    else if(this.direction === "down"){
this.y += this.bulletSpeed
      }
    else if(this.direction === "right"){
this.x += this.bulletSpeed;
      }
      else if(this.direction === "left"){
this.x -= this.bulletSpeed;
        }



  }

collsion(enemyX,enemyY,size){
if(this.x > enemyX && this.x < enemyX + size){
  if(this.y > enemyY && this.y < enemyY + size){
    return true;
  }
}

}





}
