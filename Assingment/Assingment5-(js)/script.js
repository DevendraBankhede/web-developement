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