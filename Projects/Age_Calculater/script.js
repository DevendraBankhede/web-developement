document.querySelector("form").addEventListener("submit",(event) => {
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;

//    let curYear = (curDate.split("-")[0]);
//    let dobyear = Number(dob.split("-")[0]);
//    const Age = curYear - dobyear;

   const Age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

   document.getElementById("DOB").value = "";
   document.getElementById("CurrentDate").value = "";

   document.getElementById("MyAge").innerText = Age;

})