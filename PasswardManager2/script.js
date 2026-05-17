const form = document.getElementById("passwordForm");
const list = document.getElementById("list");

// LocalStorage से data लाओ
let passwords = JSON.parse(localStorage.getItem("data")) || [];

// Page load होते ही दिखाओ
showData();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const site = document.getElementById("site").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // object बनाओ
  const obj = { site, username, password };

  // array में डालो
  passwords.push(obj);

  // localStorage में save करो
  localStorage.setItem("data", JSON.stringify(passwords));

  // UI update
  showData();

  // form reset
  form.reset();
});

// data दिखाने वाला function
function showData() {
  list.innerHTML = "";

  passwords.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.site} | ${item.username} | ${item.password}`;
    list.appendChild(li);
  });
}