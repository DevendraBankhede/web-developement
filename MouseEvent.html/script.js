// document.getElementById("btn").addEventListener("Click",function(){
//     alert("clicked");
// });

// document.getElementById("btn").addEventListener("click",function(){
//     document.getElementById("para").innerText = "Button Pressed";
// });

// document.getElementById("btn").addEventListener("click",function(){
//     document.body.style.backgroundColor = "lightblue";
// });

// document.getElementById("btn").addEventListener("dblclick",function(){
//     alert("Double Click !");
//      console.log("Double Click Working");
// });

// document.getElementById("para").addEventListener("dblclick",function(){
//     this.style.color = "blue";
// });

// document.getElementById("para").addEventListener("mouseover",function(){
//     this.style.color = "red";
// });

// document.getElementById("heading").addEventListener("mouseover",function(){
//     document.getElementById("msg").innerText = "Mouse is Here!";
// });

// document.getElementById("btn").addEventListener("click",function(){
//     this.innerText = "Clicked Succesfull";
// });

// document.getElementById("btn1").addEventListener("click",function(){
//     alert(" Button Clicked!");
// });
// document.getElementById("btn2").addEventListener("dblclick",function(){
//     alert(" Button Double-Clicked!");
// });

let para = document.getElementById("para");

para.addEventListener("mouseover", function () {
  para.style.color = "green";
});

para.addEventListener("click", function () {
  alert("Paragraph clicked!");
});