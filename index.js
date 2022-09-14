var r =Math.floor(Math.random()*6)+1;
var r1 =Math.floor(Math.random()*6)+1;
var dicef = "dice"+r+".png";
var dicef1 = "dice"+r1+".png";
var d="images/"+dicef;
var d1="images/"+dicef1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",d);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",d1);
if(r>r1){
  document.querySelector("h1").innerHTML="⛳Player1 wins!"
}
else if(r<r1){
    document.querySelector("h1").innerHTML="Player2 wins!⛳";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
