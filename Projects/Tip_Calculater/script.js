document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const bill = Number(document.getElementById("bill").value);
  const Amul = Number(document.getElementById("Amul").value);
  const Person = Number(document.getElementById("Person").value);

  const bilperperson = (bill * Amul) / Person;
//   console.log(TipAmount);

  document.getElementById("bill").value = "";
  document.getElementById("Amul").value = "";
  document.getElementById("Person").value = "";


  document.getElementById("tipinfo").innerText = bilperperson;

  // document.getElementById("dataCard").classList.remove("d-none");
  
});
