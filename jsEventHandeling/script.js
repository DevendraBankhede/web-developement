function Bulb1ON(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function Bulb1OFF(){
    document.getElementById("bulb1").style.backgroundColor = "white";
}

function Bulb2ON(){
    document.getElementById("bulb1").style.backgroundColor = "green";
}
function Bulb2OFF(){
    document.getElementById("bulb1").style.backgroundColor = "Blue";
}

document.getElementById("bulbRed").addEventListener("click",Bulb1Red);
document.getElementById("bulbBlue").addEventListener("click",Bulb1Blue);
document.getElementById("bulbGreen").addEventListener("click",Bulb1Green);

document.getElementById("bulbColor").addEventListener("change",ChangeBulbColor);

function ChangeBulbColor(){
    const color = document.getElementById("bulb1Color").value;
    document.getElementById("bulb1").style.backgroundColor = color;
    document.getElementById("ABCD").style.color = color;
}

function reset(){
    window.location.reload();
}