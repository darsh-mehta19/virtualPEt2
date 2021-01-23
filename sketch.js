//Create variables here
var dog,happyDog,himg,dimg;
var database;
var foodS,foodStock;
var feed;
var addFood;
var foodObj;
var fedTime,lastFed;
function preload()
{
  dimg = loadImage("dogImg.png");
  himg = loadImage("dogimg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(800,600);
  foodObj = new Food(400,200,20,20);
  dog = createSprite(500,200);
  dog.addImage(dimg);
  dog.scale=0.4;
 
  feed= createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background("darkblue");
foodObj.display();
  drawSprites();
  //add styles here
  textSize(20);
  fill(255,0,190);
  stroke(4);
  text(foodS,650,50);
  
  fedTime = database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  fill(255,255,254);
  textSize(15)
  if(lastFed>=12){
    text("Last Feed :"+lastFed%12+"PM",350,30)
  }else if(lastFed==0){
    text("Last Feed :12 AM",350,30);
  }else{
    text("Last Feed :"+lastFed+"AM",350,30);
  }



}
function feedDog(){
  dog.addImage(himg);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
database.ref('/').update({
  Food:foodS
})
}



