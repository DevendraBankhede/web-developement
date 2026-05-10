// let input = document.getElementById("myInput");

// input.addEventListener("keydown",function(){
//     // console.log("Key Press");
//     console.log("Key Released");
// });

// let input = document.getElementById("myInput");

//     input.addEventListener("keydown", function(event) {
//         if (event.key === "Enter") {
//             alert("Enter key pressed!");
//         }
//     });

let input = document.getElementById("myInput");

input.addEventListener("key",function(event){
    console.log( event === "value");
});