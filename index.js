//random(1-6)
var randomNum1=Math.floor(Math.random()*6+1);
//mapping random number to umages in image folder
var randomImage1="images/dice"+randomNum1+".png";

//player 1 setup
var image1=document.querySelectorAll("img")[0];//player-1 image
image1.setAttribute("src",randomImage1);



//player 2 setup--------------------------------------------------------------

//random(1-6)
var randomNum2=Math.floor(Math.random()*6+1);
//mapping random number to umages in image folder
var randomImage2="images/dice"+randomNum2+".png";


var image2=document.querySelectorAll("img")[1];//player-2 image
image2.setAttribute("src",randomImage2);



//player 3 setup----------------------------------------------------------------
var randomNum3=Math.floor(Math.random()*6+1);
//mapping random number to umages in image folder
var randomImage3="images/dice"+randomNum3+".png";


var image3=document.querySelectorAll("img")[2];//player-3 image
image3.setAttribute("src",randomImage3);





//main logic -- decide who is the winner
if(randomNum1>randomNum2  && randomNum1>randomNum3 )
{
	document.querySelector("h1").innerHTML=` ${randomNum1}
	 ${randomNum2} ${randomNum3}  Player 1 wins !!!`;
}
else if(randomNum2>randomNum1 & randomNum2>randomNum3)
{
		document.querySelector("h1").innerHTML=` ${randomNum1}
	 ${randomNum2} ${randomNum3}  Player 2 wins !!!`;

}
else if(randomNum3>randomNum2 & randomNum3>randomNum1)
{
			document.querySelector("h1").innerHTML=` ${randomNum1}
	 ${randomNum2} ${randomNum3}  player 3 wins !!!`;

}
else if(randomNum1>randomNum2 && randomNum2==randomNum3){
	document.querySelector("h1").innerHTML=` ${randomNum1}
	 ${randomNum2} ${randomNum3}  Player 1 wins !!!`;
}

else if(randomNum2>randomNum3 && randomNum3==randomNum1){
		document.querySelector("h1").innerHTML=` ${randomNum1}
	 ${randomNum2} ${randomNum3}  Player 2 wins !!!`;
}

else if(randomNum3>randomNum1 && randomNum1==randomNum2){
	document.querySelector("h1").innerHTML=` ${randomNum1}
	 ${randomNum2} ${randomNum3}  player 3 wins !!!`;
}

else{
	document.querySelector("h1").innerHTML="oops tied !!!";
}





