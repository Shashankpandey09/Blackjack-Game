for(let i=0;i<document.querySelectorAll(".bubu").length;i++){
document.querySelectorAll(".bubu")[i].addEventListener("click",function(){
    document.querySelectorAll(".bubu")[i].classList.add("pac")
    setTimeout(() => {
        document.querySelectorAll(".bubu")[i].classList.remove("pac")
        
    }, 100);
})}
var cards=[];
var sum=0;
var hasblackjack=false;
var isalive=false;
var game=document.querySelector(".start");
game.addEventListener("click",startgam);



function startgam(){
    new Audio("click-for-game-menu-131903.mp3").play();
isalive=true;
cards=[getrandomcard(),getrandomcard()];
display();
}
function display(){
    document.querySelector(".cards").textContent="cards:"+cards.join(",");
    document.querySelector(".sum").textContent="sum:"+Sumcards();
    sum=0;
}
function getrandomcard(){
    let random1=Math.floor((Math.random()*11))+1;
    return random1;
}
function Sumcards(){
for( let i=0;i<cards.length;i++){
    sum=sum+cards[i];
  
}
if(sum>21){
    document.querySelector("h2").textContent="you are out of the game";
    isalive=false;
}
else if(sum===21){
    document.querySelector("h2").textContent="wohoooo you've got a blackjack";
    hasblackjack=true;
}
else{
    document.querySelector("h2").textContent="Wanna draw a new card?";
}


return sum;
}
document.querySelector(".newcard").addEventListener("click",newcard);
function newcard(){
    new Audio("click-for-game-menu-131903.mp3").play();
    if(isalive===true && hasblackjack!==true){
    cards.push(getrandomcard());

     display();}
   
   
}