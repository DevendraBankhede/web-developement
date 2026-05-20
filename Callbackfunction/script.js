function greet(name,callback) {
    console.log("Hello" + name);

    callback();
}

function sayBay() {
    console.log("Bye!");
    
}

greet("Rahul",sayBay);

// Asynchronous 

console.log("Start");

setTimeout(function(){
     console.log("Data Loaded");   
},2000);
console.log("End");

// callback Hell 
setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() =>{
                console.log("Step 4");
                
            },1000);
        },1000);
        
    },1000);
    
},1000);


// collback Promise Chaining 

const promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then((data) => {
    console.log(data);

    return data * 2;
  })
  .then((result) => {
    console.log(result);

    return result + 5;
  })
  .then((finalValue) => {
    console.log(finalValue);
  });
