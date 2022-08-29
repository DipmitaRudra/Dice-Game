
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage1="images/dice" + randomNumber1 + ".png"; //gives images\dice1-6.png
var setimage1= document.querySelectorAll("img")[0].setAttribute("src", randomdiceimage1); //changes image of dice 1
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2= "images/dice"+ randomNumber2 + ".png"; //gives images\dice1-6.png
var setimage2= document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2); //changes image of dice 2
if( randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}

else if (randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}
