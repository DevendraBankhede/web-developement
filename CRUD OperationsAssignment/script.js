// Question-1
// let users = [];
// users.push({
//     Name: "Dev",
//     age: 20,
//     city: "Bhopal"
// });
// users.push({
//     Name: "Rahul",
//     age: 22,
//     city: "Indore"
// });
// console.log(users);

// Question-2
// let users = ["Rahul","Dev","Aman","Neha"];

// users.forEach(function(users){
//     console.log(users);
// });

// Question-3
// let users = ["Rahul","Dev","Neha"];
// console.log(users[0]);

// Question-4
// let user = [
//     {id: 1, name:"Rahul"},
//     {id: 2,name:"dev"},
//     {id: 3,name:"Priya"}
// ];

// let result = user.find(function(user){
//     return user.id === 2;
// });

// console.log(result);

// Question-5
// let users = [
//     {id: 1, name:"Rahul"},
//     {id: 2,name:"Kapil"},
//     {id: 3,name:"Priya"}
// ]

// let user = users.find(function(u){
//     return u.id === 2;
// });

// user.name = "Dev";
// console.log(users);

// Question-6
// let users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Priya" },
//     { id: 3, name: "Neha" }
// ];

// let user = users.find(function(u){
//     return u.name === "Amit";
// });

// if(user){
//     user.name = "Rahul";
// }
// console.log(user);


// Question-7

// let users = [
//     {id: 1,name:"Amit"},
//     {id: 2,name:"Rahul"},
//     {id: 3,name:"Dev"}
// ];

// let updetUsers = users.filter(function(user){
//     return user.id !== 2;
// });
// console.log(updetUsers);

// Question-8

// let users = [
//     {id: 1,name:"Ram"},
//     {id: 2,name:"Praful"},
//     {id: 3,name:"Dev"}
// ];
// let updetUsers = users.filter(function(user){
//     return user.id !==2;
// });
// console.log(updetUsers);

// Question-9

// let users = []
//     users.push({id: 1,name:"Dev"});
//     users.push({id: 2,name:"Priya"});

// users.forEach(function(user){
//     console.log(user);
// });

// Question-10

// let users = [];
// users.push({ id: 1, name: "Amit" });
// users.push({ id: 2, name: "Priya" });
// let user = users.find(function(u) {
//     return u.name === "Amit";
// });
// if (user) {
//     user.name = "Rahul";
// }
// users.forEach(function(u) {
//     console.log(u);
// });

// Question-11

// let users = []
// users.push({id:1,name:"Amit"});
// users.push({id:2,name:"Dev"});
// users.push({id:3,name:"Priya"});

// let updetUsers = users.filter(function(user){
//     return user.id !== 2;
// });
// updetUsers.forEach(function(user){
//     console.log(user);
// });

// Question-12

let users = []
function addUser(id,name){
    users.push({id:id,name:name});
}

function getUser(){
    users.forEach(function(user){
        console.log(user);
    });
}

function updetUsers(id,newName){
    let user = users.find(function(u){
        return u.id === id;
    });
    if(user){
        user.name = newName;    
    }
}

function deleteUser(id){
    users = users.filter(function(u){
        return u.id !==id;
    });
}

addUser(1,"Amit");
addUser(2,"Rahul");
addUser(3,"priya");

console.log("All Users:")
getUser();

updetUsers(1,"Dev");

console.log("AfterUpdate");
getUser();

deleteUser(2);

console.log("After Delete");
getUser();