var bg;
var invisibleGround;
var coin,coin2,coinSpin;
var player,player_moveL,player_moveR,player_idle,player_idleR;
var zombie,zombie_move;
var Gzombie,Gzombie_move,zombie_moveR,Gzombie_moveR;
var gunL1,gunR1;
var isleft=false;
var isright=false;
var bullet,bullet_ig,bullet_igR;
var bullet2Group,bulletGroup,zombiegroup,zombie2group,zombie3group,zombie4group;
var bullet;
var score;
var gameover,gameOverimage;

function preload(){
  bg = loadImage("assests/forest.png");
  player_idle = loadAnimation("assests/Idle 1.png","assests/Idle 2.png","assests/Idle 3.png","assests/Idle 4.png","assests/Idle 5.png","assests/Idle 6.png","assests/Idle 7.png","assests/Idle 8.png","assests/Idle 9.png","assests/Idle 10.png",);
  player_idleR = loadAnimation("assests/Idle01.png","assests/Idle02.png","assests/Idle03.png","assests/Idle04.png","assests/Idle05.png","assests/Idle06.png","assests/Idle07.png","assests/Idle08.png","assests/Idle09.png","assests/Idle010.png",);
  coinSpin = loadAnimation("assests/Gold_21.png","assests/Gold_22.png","assests/Gold_23.png","assests/Gold_24.png","assests/Gold_25.png","assests/Gold_26.png","assests/Gold_27.png","assests/Gold_28.png","assests/Gold_29.png","assests/Gold_30.png");
  player_moveL = loadAnimation("assests/Run 1.png","assests/Run 2.png","assests/Run 3.png","assests/Run4.png","assests/Run 5.png","assests/Run 6.png","assests/Run 7.png","assests/Run 8.png",);
  player_moveR = loadAnimation("assests/Run 11.png","assests/Run 12.png","assests/Run 13.png","assests/Run14.png","assests/Run 15.png","assests/Run 16.png","assests/Run 17.png","assests/Run 18.png",);
  zombie_move = loadAnimation("assests/Walk1.png","assests/Walk2.png","assests/Walk3.png","assests/Walk4.png","assests/Walk5.png","assests/Walk6.png","assests/Walk7.png","assests/Walk8.png","assests/Walk9.png","assests/Walk10.png",);
  Gzombie_move = loadAnimation("assests/Walk01.png","assests/Walk02.png","assests/Walk03.png","assests/Walk04.png","assests/Walk05.png","assests/Walk06.png","assests/Walk07.png","assests/Walk08.png","assests/Walk09.png","assests/Walk010.png",);
  zombie_moveL = loadAnimation("assests/Walk1L.png","assests/Walk2L.png","assests/Walk3L.png","assests/Walk4L.png","assests/Walk5L.png","assests/Walk6L.png","assests/Walk7L.png","assests/Walk8L.png","assests/Walk9L.png","assests/Walk10L.png",);
  Gzombie_moveL = loadAnimation("assests/Walk01L.png","assests/Walk02L.png","assests/Walk03L.png","assests/Walk04L.png","assests/Walk05L.png","assests/Walk06L.png","assests/Walk07L.png","assests/Walk08L.png","assests/Walk09L.png","assests/Walk010L.png",);
  gunL1 = loadAnimation("assests/Shoot1.png","assests/Shoot2.png","assests/Shoot3.png");
  gunR1 = loadAnimation("assests/Shoot01.png","assests/Shoot02.png","assests/Shoot03.png");
  bullet_ig = loadAnimation("assests/bullet.png");
  bullet_igR = loadAnimation("assests/bulletR.png");
  gameOverimage = loadImage("assests/gameIMG.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  player = createSprite(600,500,20,50);
  player.addAnimation("idle", player_idle);
  player.addAnimation("idleR", player_idleR);
  player.addAnimation("moving",player_moveR);
  player.addAnimation("movinG",player_moveL);
  player.addAnimation("gunl",gunL1);
  player.addAnimation("gunR",gunR1);
  player.visible = true;




  player.scale = 0.3;

  bulletGroup = createGroup(); 
  bullet2Group = createGroup();
  zombiegroup = createGroup(); 
  zombie2group = createGroup(); 
  zombie3group = createGroup(); 
  zombie4group = createGroup(); 
  playerGroup = createGroup(); 


  coin = createSprite(650,30,20,50);
  coin.addAnimation("running", coinSpin);
  coin.scale = 0.07;

  coin2 = createSprite(830,30,20,50);
  coin2.addAnimation("running", coinSpin);
  coin2.scale = 0.07;

  invisibleGround = createSprite(500,650,10000,50);
  invisibleGround.visible = false;  

  score = 0;

  gameover = createSprite(750,300);
  gameover.addImage("ground",gameOverimage);
  gameover.visible = false;
}

function draw() {
  background(bg);
  textSize(30);
  text("Score:"+ score,685,40);
  drawSprites();
  spawnZombie()
  spawnZombie2()
  spawnZombie3()
  spawnZombie4()
  //bullet.x = player.x;

  
 if(bulletGroup.isTouching(zombiegroup)){
  
    for(var i=0;i<zombiegroup.length;i++){     
        
     if(zombiegroup[i].isTouching(bulletGroup)){
          zombiegroup[i].destroy()
          bulletGroup.destroyEach()
          score = score+5;
          
          } 
    
    }
  
 // zombiegroup.destroyEach();
 // bulletGroup.destroyEach();
 }
 if(bulletGroup.isTouching(zombie2group)){
  for(var i=0;i<zombie2group.length;i++){     
        
    if(zombie2group[i].isTouching(bulletGroup)){
      zombie2group[i].destroy()
         bulletGroup.destroyEach()
         score = score+5;
         

         } 
   
   }
  //zombie2group.destroyEach();
 // bulletGroup.destroyEach();
 }
 if(bulletGroup.isTouching(zombie3group)){
  for(var i=0;i<zombie3group.length;i++){     
        
    if(zombie3group[i].isTouching(bulletGroup)){
      zombie3group[i].destroy()
         bulletGroup.destroyEach()
         score = score+5;
         

         } 
   
   }
  //zombie3group.destroyEach();
  //bulletGroup.destroyEach();
 }
 if(bulletGroup.isTouching(zombie4group)){
  for(var i=0;i<zombie4group.length;i++){     
        
    if(zombie4group[i].isTouching(bulletGroup)){
      zombie4group[i].destroy()
         bulletGroup.destroyEach()
         score = score+5;
         

         } 
   
   }
 // zombie4group.destroyEach();
 // bulletGroup.destroyEach();
 }
 if(bullet2Group.isTouching(zombiegroup)){
  for(var i=0;i<zombiegroup.length;i++){     
        
    if(zombiegroup[i].isTouching(bullet2Group)){
      zombiegroup[i].destroy()
      bullet2Group.destroyEach()
      score = score+5;
      

         } 
   
   }
 // zombiegroup.destroyEach();
 // bullet2Group.destroyEach();
 }
 if(bullet2Group.isTouching(zombie2group)){
  for(var i=0;i<zombie2group.length;i++){     
        
    if(zombie2group[i].isTouching(bullet2Group)){
      zombie2group[i].destroy()
      bullet2Group.destroyEach()
      score = score+5;


         } 
   
   }
  //zombie2group.destroyEach();
  //bullet2Group.destroyEach();
 }
 if(bullet2Group.isTouching(zombie3group)){
  for(var i=0;i<zombie2group.length;i++){     
        
    if(zombie3group[i].isTouching(bullet2Group)){
      zombie3group[i].destroy()
      bullet2Group.destroyEach()
      score = score+5;

         } 
   
   }
 // zombie3group.destroyEach();
 // bullet2Group.destroyEach();
 }
 if(bullet2Group.isTouching(zombie4group)){
  for(var i=0;i<zombie4group.length;i++){     
        
    if(zombie4group[i].isTouching(bullet2Group)){
      zombie4group[i].destroy()
      bullet2Group.destroyEach()
      score = score+5;

         } 
   
   }
  ///zombie4group.destroyEach();
 // bullet2Group.destroyEach();
 }
 if(zombie4group.isTouching(player)){
   gameover.visible = true;
   player.destroy();
   zombiegroup.destroyEach();
   zombie2group.destroyEach();
   zombie4group.destroyEach();
   zombie3group.destroyEach();
 }
 if(zombie3group.isTouching(player)){
  gameover.visible = true;
  player.visible = false;
  zombiegroup.destroyEach();
  zombie2group.destroyEach();
  zombie4group.destroyEach();
  zombie3group.destroyEach();
}
if(zombie2group.isTouching(player)){
  gameover.visible = true;
  player.visible = false;
  zombiegroup.destroyEach();
  zombie2group.destroyEach();
  zombie4group.destroyEach();
  zombie3group.destroyEach();
}
if(zombiegroup.isTouching(player)){
  gameover.visible = true;
  player.visible = false;
  zombiegroup.destroyEach();
  zombie2group.destroyEach();
  zombie4group.destroyEach();
  zombie3group.destroyEach();
}
}
function keyPressed(){
  if(keyCode==37){
  player.changeAnimation("moving");
  player.velocityX = - 5;
  isleft=true
  isright=false
  }
  if(keyCode==39){
  player.changeAnimation("movinG");
  player.velocityX =+ 5;
  isright=true
  isleft=false
  }
  if(keyCode==32){
    if(isleft){
    player.changeAnimation("gunR");
    var bullet=createSprite(player.x,player.y,10,10)
    bullet.addAnimation("bulletR",bullet_igR);
    bullet.scale=0.019;
    bullet.velocityX=-5
    handlebullet(bullet);
    bulletGroup.add(bullet);

    }
    if(isright){
    player.changeAnimation("gunl")
    var bullet2 =createSprite(player.x,player.y,10,10)
    bullet2.addAnimation("bulletL",bullet_ig);
    bullet2.scale=0.019;
    bullet2.velocityX=5;
    handlebullet2(bullet2);
    bullet2Group.add(bullet2);
   
    }
  }
}
function keyReleased(){
  if(keyCode ==37){
    player.changeAnimation("idleR");
    player.velocityX = 0
  }
  if(keyCode ==39){
    player.changeAnimation("idle");
    player.velocityX = 0
  }
  if(keyCode==32){
    player.changeAnimation("idle");
    }
}
function spawnZombie(){
  if (frameCount % 120 === 0){
    var zombie = createSprite(1,500,10,40);
    zombie.addAnimation("zombieB",zombie_move);
    zombie.velocityX = 2;
     zombie.scale = 0.3;
     zombiegroup.add(zombie);

     zombie.visible = true;
  }
}
 function spawnZombie2(){
  if (frameCount % 120 === 0){
    var zombie2 = createSprite(1500,500,10,40);
    zombie2.addAnimation("zombieBL",zombie_moveL);
    zombie2.velocityX = -2;
     zombie2.scale = 0.3;
     zombie2group.add(zombie2);

     zombie2.visible = true;

  }
}
function spawnZombie3(){
  if (frameCount % 90 === 0){
    var zombie3 = createSprite(1,500,10,40);
    zombie3.addAnimation("zombieG",Gzombie_move);
    zombie3.velocityX = 2;
    zombie3.scale = 0.3;
    zombie3group.add(zombie3);
 
    zombie3.visible = true;

  }
}
function spawnZombie4(){
  if (frameCount % 90 === 0){
    var zombie4 = createSprite(1500,500,10,40);
    zombie4.addAnimation("zombieGL",Gzombie_moveL);
    zombie4.velocityX = -2;
    zombie4.scale = 0.3;
    zombie4group.add(zombie4);

    zombie4.visible = true;


  }
}
function handlebullet(bullet){
  bullet.isTouching(zombiegroup, function(collector, collected){
  collected.remove();
  })
  bullet.isTouching(zombie3group, function(collector, collected){
    collected.remove();
    })
    bullet.isTouching(zombie2group, function(collector, collected){
      collected.remove();
      })
      bullet.isTouching(zombie4group, function(collector, collected){
        collected.remove();
        })
}
function handlebullet2(bullet2){
  bullet2.isTouching(zombie2group, function(collector, collected){
  collected.remove();
  })
  bullet2.isTouching(zombie4group, function(collector, collected){
    collected.remove();
    })
    bullet2.isTouching(zombiegroup, function(collector, collected){
      collected.remove();
      })
      bullet2.isTouching(zombie3group, function(collector, collected){
        collected.remove();
        })
}
