document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fn = document.getElementById("fullName").value;
    const gndr = document.querySelector("input[name='gender']:checked")?.value;

    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    console.log(gndr);

    console.log(timings);
  });

// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });
