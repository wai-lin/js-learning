const form = $("#newTaskForm");
const formInput = $("#taskInput");
const list = $("#taskList");

form.on("submit", function (formEvent) {
  formEvent.preventDefault();

  const newLi = $(`
    <li>
      <input type="checkbox"/> <span>${formInput.val()}</span>
    </li>
  `);

  newLi.on("click", function () {
    // newLi.html(`
    //   <input type="checkbox" checked="true"/> <span>${formInput.val()}</span>
    // `);
    // newLi.html(`
    //   <input type="checkbox" checked="true"/> <span>${formInput.val()}</span>
    // `);
    // const checkbox = newLi.children().find((el) => el.tagName === "INPUT");
  });

  list.append(newLi);
});
