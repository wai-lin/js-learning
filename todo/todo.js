const form = document.querySelector("#newTaskForm");
const formInput = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

form.addEventListener("submit", function (formEvent) {
  formEvent.preventDefault(); // tell browser to not refresh

  const inputValue = formInput.value;

  if (inputValue !== "") {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<input type="checkbox" /> <span>${inputValue}</span>`;

    newLi.addEventListener("click", function () {
      const checkbox = newLi.querySelector('input[type="checkbox"]');

      // NOTE: toggle the current checkbox checked value
      const newCheckboxValue = !checkbox.checked;

      // NOTE: assign the newCheckbox value to the checkbox element
      checkbox.checked = newCheckboxValue;

      // NOTE: if input checked value is `true`
      if (newCheckboxValue) {
        newLi.style.cssText = `
          text-decoration: line-through;
          color: blue;
          font-weight: bold;
        `;
      } else {
        // NOTE: if input checked value is `false`

        newLi.style.cssText = "";
      }

      // if (newCheckboxValue) {
      //   newLi.classList.add("checked");
      // } else {
      //   newLi.classList.remove("checked");
      // }
    });

    list.appendChild(newLi);
    formInput.value = "";
  }
});
