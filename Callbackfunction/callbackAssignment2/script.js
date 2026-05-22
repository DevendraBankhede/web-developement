// const myPromise = new promise(function(resolve,reject){

//     resolve("Task completed");
// });
// myPromise.then(function(message){
//     console.log(message);
    
// });

// Question ->2 
// const promise = new Promise(function(resolve, reject) {

//     reject("Something went wrong");

// });

// promise.catch(function(message) {

//     console.log(message);

// });

// Question ->3 
// const promise = new Promise(function(resolve, reject){

//     setTimeout(function(){

//         resolve("Data received");

//     }, 2000);

// });

// promise.then(function(message){

//     console.log(message);

// });

// Question ->4 
// const promise = new Promise(function(resolve, reject){

//     let num = 15;

//     if(num > 10){
//         resolve("Number is Greater than 10");
//     }
//     else{
//         reject("Number is NOT Greater than 10");
//     }

// });

// promise
// .then(function(message){
//     console.log(message);   
// })
// .catch(function(error){
//     console.log(error);
// });

// Question ->5
// const promise = new Promise(function(resolve, reject){

//     let num = 20;

//     if(num > 10){
//         resolve("Valid Number");
//     }
//     else{
//         reject("Invalid Number");
//     }

// });
// promise
// .then(function(message){
//     console.log(message);
// })
// .catch(function(error){
//     console.log(error);
// });

// Question ->6 
// const promise = new Promise(function(resolve, reject){
//     let num = 5;

//     if(num > 10){
//         resolve("Valid Number");
//     }
//     else{
//         reject("Invalid Number");
//     }
// });
// promise

// .then(function(message){
//     console.log(message);
// })
// .catch(function(error){
//     console.log(error);
// }); 

// Question ->7 
// function step1()
// {
//     return new Promise(function(resolve){
//         resolve("Step1 Complited");
//     });
// }
// function step2()
// {
//     return new Promise(function(resolve){
//         resolve("Step2 Complited");
//     });
// }
// function step3()
// {
//     return new Promise(function(resolve){
//         resolve("Step3 Complited");
//     });
// }
// step1()
// .then(function(message){
//     console.log(message);
//     return step2();    
// })
// .then(function(message){
//     console.log(message);
//     return step3();
// })
// .then(function(message){
//     console.log(message);
// }); 

// Question ->8 
// new Promise(function(resolve){
//     resolve(5);
// })
// .then(function(num){
//     return num + 10;
// })
// .then(function(num){
//     return num * 2;
// })
// .then(function(result){
//     console.log(result);
// }); 

// Question ->9
// function orderPlaced(){
//     return new Promise(function(resolve){
//         resolve("OrderPlaced");
//     });
// }
// function shipped(){
//     return new Promise(function(resolve){
//         resolve("shipped")
//     });
// }
// function Deliverd(){
//     return new Promise(function(resolve){
//         resolve("Deliverd");
//     });
// }
// orderPlaced()
// .then(function(message){
//     console.log(message);
//     return shipped();
// })
// .then(function(message){
//     console.log(message);
//     return Deliverd();
// })
// .then(function(message){
//     console.log(message);
    
// }) 

// Question ->10 
// const promise = new Promise(function(resolve, reject){
//     let success = Math.random() > 0.5;

//     if(success){
//         resolve("Promise Successful");
//     }
//     else{
//         reject("Promise Faild");
//     }
// });
// promise
// .then(function(message){
//     console.log(message);
    
// })
// .catch(function(error){
//     console.log(error);
// }); 

// Question ->11 
function step1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("step1 Complited");
        },1000);
    });
}
function step2(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("step2 Complited");
        },1000);
    });
}
function step3(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("step3 Complited");
        },1000);
    });
}
step1()
.then(function(message){
    console.log(message);
    return step2();
})
.then(function(message){
    console.log(message);
    return step3();
})
.then(function(message){
    console.log(message);
});

/*Question ->12*/ 
const promise = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Loding Complited");
    },3000);
});
promise
.then(function(message){
    console.log(message);
    
});