// Elements

const fromCountry =
document.getElementById("fromCountry");

const toCountry =
document.getElementById("toCountry");

const fromFlag =
document.getElementById("fromFlag");

const toFlag =
document.getElementById("toFlag");

const convertBtn =
document.getElementById("convertBtn");

const result =
document.getElementById("result");

const amountInput =
document.querySelector("input");


// Country Data

const countries = {

    india: {
        code: "INR",
        flag: "https://flagcdn.com/w320/in.png"
    },

    usa: {
        code: "USD",
        flag: "https://flagcdn.com/w320/us.png"
    },

    japan: {
        code: "JPY",
        flag: "https://flagcdn.com/w320/jp.png"
    },

    uk: {
        code: "GBP",
        flag: "https://flagcdn.com/w320/gb.png"
    }

};


// Change From Flag

fromCountry.addEventListener("change", function () {

    const country =
    fromCountry.value;

    fromFlag.src =
    countries[country].flag;

});


// Change To Flag

toCountry.addEventListener("change", function () {

    const country =
    toCountry.value;

    toFlag.src =
    countries[country].flag;

});


// Currency Convert Using API

convertBtn.addEventListener("click", async function () {

    const amount =
    amountInput.value;

    const fromCode =
    countries[fromCountry.value].code;

    const toCode =
    countries[toCountry.value].code;


    // API Fetch

    const response =
    await fetch(
    `https://open.er-api.com/v6/latest/${fromCode}`
    );

    const data =
    await response.json();


    // Get Rate

    const rate =
    data.rates[toCode];


    // Convert

    const convertedAmount =
    amount * rate;


    // Show Result

    result.innerText =
    amount + " " +
    fromCode +
    " = " +
    convertedAmount.toFixed(2) +
    " " +
    toCode;

});