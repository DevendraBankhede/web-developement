function Submit() {
    console.log("Submit Button Clicked");

    const fn = document.getElementById("fullName").value;
    console.log(fn);

    document.getElementById("myData").innerText = fn;
    document.getElementById("fullName").value = "";

    document.getElementById("myData1").innerText = fn;


    document.getElementById("dataCard").classList.add("divShow");
    document.getElementById("dataCard").classList.remove("divHide");
    
}