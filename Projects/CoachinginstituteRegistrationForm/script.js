// SubmitButton
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;

    const timings = [];
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    const registrationData = {
      FullName: fullName,
      Email: email,
      Phone: phone,
      DateofBirth: dob,
      Gender: gender,
      Qualification: qualification,
      Marks: marks,
      Course: course,
      Timings: timings,
      Address: address,
      City: city,
      PinCode: pin,
    };

    validateData(registrationData)
      ? (console.log("Registration Data:", registrationData),
        alert("Registration successful! Check console for details."))
      : alert("Registration unsuccessfull! Enter valid Data.");
  });

// ResetButton
document
  .getElementById("registrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function validateData(data) {
  document.querySelectorAll(".manualError").forEach((item) => {
    item.innerText = "";
  });

  let isValid = true;

  console.log(data);
   

  if (!data.FullName) {
    document.getElementById("fullNameError").innerText = "Full Name Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.FullName)) {
    document.getElementById("fullNameError").innerText =
      "Only alphabets and spaces are allowed";
    isValid = false;
  }

  if (!/^[A-Za-z\d\.\_]+@(gmail.com|outlook.com|ricr.in)$/.test(data.Email)) {
    document.getElementById("emailError").innerText =
      "Only standard Email format allowed with gmail.com";
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(data.Phone)) {
    document.getElementById("phoneError").innerText =
      "Only Indian mobile numbers allowed";
    isValid = false;
  }
  

if (!/^(10|12|diploma|UG|PG)$/.test(data.Qualification)) {
  document.getElementById("qualificationError").innerText =
    "Please select a valid qualification";
  isValid = false;
}

// if(!/^(iitJee|neet|bankingExams|CA/CS|upsc)$/.test(data.course)) {
//       document.getElementById("courseError").innerText = 
//       "Please select a valid Course";
//       isValid = false;
// }

  return isValid;
}