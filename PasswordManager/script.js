document.getElementById("passFrom").addEventListener("submit", (event) => {
  event.preventDefault();

  const webSiteName = document.getElementById("siteName").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value;

  const packet = {
    WebsiteName: webSiteName,
    UserName: userName,
    Password: password,
  };

  saveToLocalStorage(packet);

  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
});

document.getElementById("passFrom").addEventListener("reset", (event) => {
  event.preventDefault();
  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
});

function saveToLocalStorage(packet) {
  const oldData = JSON.parse(localStorage.getItem("Passwords")) || [];

  oldData.push(packet);

  const packetInString = JSON.stringify(oldData);

  localStorage.setItem("Passwords", packetInString);
}