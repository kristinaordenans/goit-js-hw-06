const input = document.querySelector("#name-input");
const newName = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    if (input.value === "") {
        newName.textContent = "Anonymous"; 
        return;
      }
    newName.textContent = event.target.value;
});
