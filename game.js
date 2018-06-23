var bullets = []
var player;
var enemys = []
var enemyAmount = 100;
function setup(){
  
createCanvas(windowWidth,windowHeight)
player = new Player();
for(let  i = 0; i < enemyAmount;i++){
enemys[i] = new Enemy();

}

}








function draw(){
background(0)
player.render();
for(let  i = 0; i < enemys.length;i++){
enemys[i].render();

}
for(let  i = 0; i < bullets.length;i++){
bullets[i].render();


}




for(let  i = 0; i < bullets.length;i++){
for(let  j = 0; j < enemys.length;j++){
if(bullets[i].collsion(enemys[j].x,enemys[j].y,enemys[j].size)){
  enemys.splice(j,1)
  bullets.splice(i,1)
}

}





}

for(let  i = 0; i < bullets.length;i++){
  if(bullets[i].x > windowWidth || bullets[i].x < 0){
    bullets.splice(i,1);

  }else if(bullets[i].y > windowHeight || bullets[i].y < 0){
    bullets.splice(i,1);
  }
}






for(let i = 0; i < enemys.length;i++){

if(player.collsion(enemys[i].x,enemys[i].y,enemys[i].size)){
  endGame();
}

}





}



function endGame(){
document.write("gameOVER CUNT")

}
