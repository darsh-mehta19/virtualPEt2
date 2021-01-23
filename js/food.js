class Food{
    constructor(x,y,width,height) {
        
       
        
       
        this.width = width;
        this.height = height;
        var foodStock,lastFed;
        foodStock=database.ref('food')
        foodStock.on("value",readStock);
        function readStock(data){
            foodS=data.val();
          }
          function writeStock(x){
            database.ref('/').update({
              food:x
            })
          }
         
}
      display(){
       var x=80,y=100;
       this.body = loadImage("Milk.png");
       imageMode(CENTER);
      // image(this.image,720,220,70,70);

       if(this.foodStock!=0){
           for(var i=0;i<this.foodStock;i++){
               if(i%10==0){
                   x=80;
                   y = y+50;
               }
              
           }
       }

      }
}