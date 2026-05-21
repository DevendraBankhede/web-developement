function greet(callback){
    console.log("Hello user");
    
    callback();
}

function message() {
    console.log("WelCome to JavaScript!");
    
}
greet(message);

// Question ->2 
function sayBye() {
    console.log("Bye");
    
}
function mainFunction() {
    console.log("Work Done");
    
    callback();
}

mainFunction("sayBye"); 

// Question ->3 
setTimeout (function(){
    console.log("Welcome!");
},2000);

// Question ->4 
console.log("Start");

setTimeout(function(){
    console.log("Async Task");
    
},3000);

console.log("End"); 

// Question ->5
setTimeout (function() {
    console.log("Step-1");
    

    setTimeout (function() {
        console.log("Step-2");
        
    },2000);
},1000);

// Question ->6 
function orderTaken(callback) {
  console.log("Order Taken");

  callback();
}

function cooking(callback) {
  console.log("Cooking");

  callback();
}
function served() {
  console.log("Served");
}
orderTaken(function () {

  cooking(function () {

    served();

  });

});

// Question ->7 
setTimeout (function() {
    console.log("Step-1");
    
    setTimeout(function(){
        console.log("Step-2");
        
        setTimeout(function(){
            console.log("Step-3");
            
            setTimeout(function(){
                console.log("Step-4");
                
            },1000);
        },1000);
    },1000);
},1000); 

// Question ->8 
function greetUSer(name,callback){
    callback(name);
}
function showMessage(userName){
    console.log("WelCome " + userName);
    
}
greetUSer("Devendra",showMessage); 

// Question ->9
const  button = document.getElementById("btn");
button.addEventListener("click",function(){
    console.log("Button Clicked");
    
}); 

// Question ->10 
function task1(callback) {
    setTimeout(function(){
        console.log("Login Done");
        
        callback();
    },1000);
}

function task2(callback){
    setTimeout(function(){
        console.log("Data Fetched");
        
        callback();
    },1000);
}

function task3(callback){
    setTimeout(function(){
        console.log("Dashbord Opened");
        
    },1000);
}

task1(function(){
    task2(function(){
        task3();
      });
});