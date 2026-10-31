const input = document.querySelector("input");
const upload = document.querySelector("#upload");
const taskContainer = document.querySelector(".taskContainer");

upload.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") return;

    const newTask = document.createElement("div");
    newTask.classList.add("taskList");
    newTask.innerHTML = `
        <i class="fa-solid fa-star icon-star"></i>
        <p></p>
        <div>
            <i class="fa-solid fa-trash icon-trash"></i>
            <i class="fa-solid fa-pen-to-square icon-edit"></i>
            <i class="fa-regular fa-circle-check icon-check"></i>
        </div>
    `;
    newTask.querySelector("p").textContent = input.value;
    taskContainer.appendChild(newTask);
    input.value = "";
});

taskContainer.addEventListener("click", (e) => {
    const task = e.target.closest(".taskList");
    if (!task) return; // ده اللي بيمنع الـ error

    const text = task.querySelector("p");

    if (e.target.classList.contains("icon-star")) task.classList.toggle("favorite");
    if (e.target.classList.contains("icon-trash")) task.remove();
    if (e.target.classList.contains("icon-check")) text.classList.toggle("check");
    if (e.target.classList.contains("icon-edit")) {
        text.contentEditable = true;
        text.focus();
    }
});

taskContainer.addEventListener("click", (e) => {
    const editBtn = e.target.closest(".icon-edit");
    if (!editBtn) return;

    const text = editBtn.closest(".taskList").querySelector("p");
    text.contentEditable = true;
    text.focus();
});

taskContainer.addEventListener("focusout", (e) => {
    e.target.contentEditable = false;
});

taskContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.isContentEditable) {
        e.preventDefault();
        e.target.blur();
    }
});


