function game16(){
  $(".game").empty(); 
  
  var pics = [ "pic3.jpg", "pic2.jpg", "pic1.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg"];  
  function shuffle(a) { ///mieszanie
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         x = a[i];
         a[i] = a[j];
         a[j] = x;
    }
   return a;
  }
  shuffle(pics);
  console.log(pics);  
 
  for ( i=0; i<=15; i++) {
   $(".game").append('<div class= "field " id="p'+i+'"></div>'); 
  }    
  for(var i=0; i<=15; i++){
      document.getElementById('p'+i).addEventListener("click",function(){
      turnPic(this.id.substring(1));
      })};
  var oneVisible = false;
  var counter  = 0;
  var numberOne;  
  var lock = false;
  var pairsLeft = 8; 

  function turnPic(nr){
    var opacityValue = $('#p' + nr).css('opacity');
    if(opacityValue != 0 && lock == false){  
      lock = true;
      var picture = "url(img/" + pics[nr] + ")";  
      $('#p'+nr).css('background-image', picture );
      $('#p'+nr).addClass('fieldA'); 
      $('#p'+nr).removeClass('field');     
      if(oneVisible == false){ 
        oneVisible = true;
        numberOne = nr;
        lock = false;
      }
      else{
        if(pics [numberOne] == pics[nr]){
          setTimeout(function() {hide2pics(nr, numberOne ) }, 750);
        }
        else{
          setTimeout(function() {restore2pics(nr, numberOne ) }, 1000);
        }
        counter++;
        $('.score').html("Moves number:" + counter);
        oneVisible = false;     
      }}
  }
  function hide2pics (nr1, nr2){            
    $('#p' + nr1).css('opacity', '0');
    $('#p' + nr2).css('opacity', '0');     
    pairsLeft--;    
    if (pairsLeft == 0){
     //alert('Game over! Your result:' + counter )
      $(".game").html('<h1>Game over!<br> Your result: ' + counter + ' moves</h1>' ) 
    }   
    lock = false;
    scoreCounter;
   }
  function restore2pics (nr1, nr2){
    $('#p'+nr1).css('background-image', 'url(img/cov.jpg)' );
    $('#p'+nr1).addClass('field'); 
    $('#p'+nr1).removeClass('fieldA');
    $('#p'+nr2).css('background-image', 'url(img/cov.jpg)' );
    $('#p'+nr2).addClass('field'); 
    $('#p'+nr2).removeClass('fieldA'); 
    lock = false;
  }  
  function scoreCounter() {  
      var score = 10
      alert('All results:' + score) 
      } 
  }
function game32(){  
  $(".game").empty(); 
  
  var pics = [ "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg","pic9.jpg", "pic10.jpg", "pic11.jpg", "pic12.jpg", "pic13.jpg", "pic14.jpg", "pic15.jpg","pic9.jpg", "pic10.jpg", "pic11.jpg", "pic12.jpg", "pic13.jpg", "pic14.jpg", "pic15.jpg"];
  function shuffle(a) { ///mieszanie
   var j, x, i;
   for (i = a.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       x = a[i];
       a[i] = a[j];
       a[j] = x;
    }
   return a;
  }
  shuffle(pics);
  console.log(pics);   
  for ( i=0; i<=29; i++) {
   $(".game").append('<div class= "field col-sm-6 col-md-3" id="p'+i+'"></div>'); 
  }    
  for(var i=0; i<=29; i++){
     document.getElementById('p'+i).addEventListener("click",function(){
       turnPic(this.id.substring(1));
    })};  
  var oneVisible = false;
  var counter  = 0;
  var numberOne;  
  var lock = false;
  var pairsLeft = 8; 
  function turnPic(nr){ 
    var opacityValue = $('#p' + nr).css('opacity');
    if(opacityValue != 0 && lock == false){  
      lock = true;
      var picture = "url(img/" + pics[nr] + ")";  
      $('#p'+nr).css('background-image', picture );
      $('#p'+nr).addClass('fieldA'); 
      $('#p'+nr).removeClass('field');     
      if(oneVisible == false){ 
        oneVisible = true;
        numberOne = nr;
        lock = false;
      }
      else{
        if(pics [numberOne] == pics[nr]){
          setTimeout(function() {hide2pics(nr, numberOne ) }, 750);
        }
        else{
          setTimeout(function() {restore2pics(nr, numberOne ) }, 1000);
        }
        counter++;
        $('.score').html("Moves number:" + counter);
        oneVisible = false;     
    }}
    }
  function hide2pics (nr1, nr2){            
    $('#p' + nr1).css('opacity', '0');
    $('#p' + nr2).css('opacity', '0');     
    pairsLeft--;    
    if (pairsLeft == 0){
     //alert('Game over! Your result:' + counter )
      $(".game").html('<h1>Game over!<br> Your result: ' + counter + ' moves</h1>' ) 
    }   
    lock = false;
    scoreCounter;
   }
  function restore2pics (nr1, nr2){
    $('#p'+nr1).css('background-image', 'url(img/cov.jpg)' );
    $('#p'+nr1).addClass('field'); 
    $('#p'+nr1).removeClass('fieldA');
    $('#p'+nr2).css('background-image', 'url(img/cov.jpg)' );
    $('#p'+nr2).addClass('field'); 
    $('#p'+nr2).removeClass('fieldA'); 
    lock = false;
  }  
  function scoreCounter() {  
    var score = 10;
    $('.score')
  } 
  }

function reset() {
  $(".game").empty();  
}