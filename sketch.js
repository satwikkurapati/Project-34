var dog,happyDog,database,foodS,foodStock
var dogImage,dogImage1

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  var dog=createSprite(250,350,150,150);
  dog.addImage(dogImage)
  dog.scale=0.25;
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImage1);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
})
}


