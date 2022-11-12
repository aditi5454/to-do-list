var color1=document.querySelector(".colour1");
var color2=document.querySelector(".colour2");
var body=document.getElementById("Gradient");

function setGradient(){
    document.body.style.background="linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);