function Submit() {
    console.log("Submit Button Clicked");

    const name = document.getElementById("Name").value;
    const city = document.getElementById("City").value;
    console.log(name);
    console.log(city);

    document.getElementById("myData").innerText = name;
    document.getElementById("Name").value = "";

    document.getElementById("myData1").innerText = city;
    document.getElementById("City"),value = "";

    document.getElementById("dataCard").classList.add("divShow");
    document.getElementById("dataCard").classList.remove("divHide");
}

function  Submit() {
    console.log("Submit Button Clicked");

    const Email = document.getElementById("Email").value;
    const Password = document.getElementById("Password").value;
    console.log(Email);
    console.log(Password);

    document.getElementById("myEmail").innerText = Email;
    document.getElementById("Email").value = "";

    document.getElementById("myPassword").innerText = Password;
    document.getElementById("Password").value = "";

    document.getElementById("dataCard").classList.add("divShow");
    document.getElementById("dataCard").classList.remove("divHide");
}


function Submit() {
    console.log("Submit Button Clicked");

    const FirstName = document.getElementById("FirstName").value;
    const LastName = document.getElementById("LastName").value;
    console.log(FirstName);
    console.log(LastName);


    document.getElementById("myFirstName").innerText = FirstName;
    document.getElementById("FirstName").value = "";

    document.getElementById("myLastName").innerText = LastName;
    document.getElementById("LastName").value = "";

    document.getElementById("dataCard").classList.add("divShow");
    document.getElementById("dataCard").classList.remove("divHide");
}