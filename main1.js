player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
playerscore=0;
player2score=0;
document.getElementById("name").innerHTML= player1 +":";
document.getElementById("name1").innerHTML=player2 +":";
document.getElementById("number").innerHTML=playerscore ;
document.getElementById("number2").innerHTML=player2score ;
document.getElementById("Question name").innerHTML=player1;
document.getElementById("Answer name").innerHTML=player2;
function check(){
q=document.getElementById("questionn").value;
q1=document.getElementById("questionm").value;
document.getElementById("first").innerHTML=q;
document.getElementById("second").innerHTML=q1;



}