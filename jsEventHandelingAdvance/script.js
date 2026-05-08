document.getElementById("redbox").addEventListener("mouseover",fillRedColor);
document.getElementById("redbox").addEventListener("mouseout",fillBaseColor);

document.getElementById("greenbox").addEventListener("mouseover",fillgreenColor);
document.getElementById("greenbox").addEventListener("mouseout",fillBaseColor);

document.getElementById("Bluebox").addEventListener("mouseover",fillblueColor);
document.getElementById("Bluebox").addEventListener("mouseout",fillBaseColor);

function fillRedColor(){
    document.getElementById("bulb1").style.backgroundColor = "red";
}

function fillgreenColor(){
    document.getElementById("bulb1").style.backgroundColor = "green";
}


function fillblueColor(){
    document.getElementById("bulb1").style.backgroundColor = "Blue";
}


function fillBaseColor(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}
