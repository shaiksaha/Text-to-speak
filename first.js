let elm=document.getElementById("hello");
let elm1=document.getElementById("btn");
elm.addEventListener("input",function(){
 x=this.value;

});
elm1.addEventListener("click",function(){
  let y= new SpeechSynthesisUtterance(x);
  speechSynthesis.speak(y);
 
 });