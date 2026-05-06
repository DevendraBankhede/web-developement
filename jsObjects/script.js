let fd = [
    ["RajVardhan" , "15-51-44" , 4456456454 , "bhopal" , "teacher"]
]
fd.forEach((element)=>
{
    console.log(element);
    
})

// Json format

let FDdata = 
[
  {
    "id": 1,
    "name": "Rahul Sharma",
    "phone": "9876543210",
    "city": "Bhopal",
    "profession": "Software Developer"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "phone": "9123456780",
    "city": "Indore",
    "profession": "Doctor"
  },
  {
    "id": 3,
    "name": "Amit Patel",
    "phone": "9988776655",
    "city": "Ahmedabad",
    "profession": "Business Analyst"
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "phone": "9090909090",
    "city": "Delhi",
    "profession": "Teacher"
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "phone": "9812345678",
    "city": "Mumbai",
    "profession": "Graphic Designer"
  }
]

FDdata.forEach((e)=>console.log(e));
FDdata.forEach((e)=>console.log(e["phone"]));
FDdata.forEach((e)=>console.log(e["name"]));

console.log(FDdata);
console.log(FDdata[1].name);//dot notation
console.log(FDdata[2]["name"]);//bracket notation

let dev = {
    name:  "devendra",
    dob:  "21-3-2004",
    phone:  9098241356,
    city:  "Multai",
    profession: "Engineer",
};

console.log(Object.keys(dev));
console.log(Object.values(dev));

let ar1  = [22,43,6,74,8,91,5,23,32,6,9,4,7,92,45];

// == compareFunction ==
ar.sort((a,b) => a - b);

console.log(ar);

console.log(ar.find((val)=> val  === 32));
console.log(ar.findIndex((val)=> val  === 6));
console.log(ar.findLastIndex((val)=> val  === 6));

let ar2 = [22,43,6,74,8,91,5,23,32,6,9,4,7,92,45];
console.log(ar2.filter((val) => val > 20));
console.log(ar2.find((val) => val >20));

console.log(ar2.slice(0,7));

let ab = "This is Web Development Class"

console.log(ab);

console.log(ab.split(" "));
console.log(ab.split("_"));
