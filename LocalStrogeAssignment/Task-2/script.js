// Question ->1
localStorage.setItem("username","Rahul");

let name = localStorage.getItem("username");

// Question ->2

localStorage.setItem("theme","dark");

let themeValue = localStorage.getItem("theme");
document.getElementById("result").innerText = themeValue;

// Question ->3 
localStorage.setItem("city", "Mumbai");

localStorage.removeItem("city");

console.log(localStorage.getItem("city"));

// Question -4 
document.getElementById("clearBtn").addEventListener("click",function() {
    Storage.clear();
    le.log("All localStroge data cleared");
});

// Question -5 
const user = {
    name:"Rahul",
    age:22
};
localStorage.setItem("userData",JSON.stringify(user));
const data = JSON.parse(localStorage.getItem(userData));
console.log(data.age);

// Question -6 
localStorage.setItem("theme","dark");
localStorage.setItem("theme","light");
console.log(localStorage.getItem("theme"));