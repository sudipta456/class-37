class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4]
  }
  play(){
    form.hide();

      textSize(30);
     text("Game Start", 120, 100)
     Player.getPlayerInfo();
     console.log(allPlayers);
     if(allPlayers!== undefined){
       var pointer = 0;
       var x = 0;
       var y;
       for(var plr in allPlayers){
         
          x = x + 200;
          y = displayHeight - allPlayers[plr].distance;
          cars[pointer].x = x;
          cars[pointer].y = y;
          pointer = pointer+1;
           if (pointer === player.index){
              cars[pointer-1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[pointer-1].y;

           }
          
        
         
         

       }
     }
     if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
         player.update(); 
      }
      drawSprites();
  }

}
