var input = document.querySelector("input");
var upload = document.querySelector("#upload");
var taskContainer = document.querySelector(".taskContainer");
var taskList = document.querySelectorAll(".taskList");
var iconStar = document.querySelectorAll(".icon-star");


upload.addEventListener("click", (e) => {
    e.preventDefault();
    var newTask = document.createElement("div");
    newTask.classList.add("taskList");
    newTask.innerHTML = `
    <i class="fa-solid fa-star icon-star"></i>
    <p>${input.value}</p>
    <div>
        <i class="fa-solid fa-trash icon-trash"></i>
        <i class="fa-solid fa-pen-to-square icon-edit"></i>
        <i class="fa-regular fa-circle-check icon-check"></i>
    </div>
    `;
    taskContainer.appendChild(newTask);
    input.value = "";
});

taskContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-star")) {
        e.target.closest(".taskList").classList.toggle("favorite");
    }
});


taskContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-trash")) {
        e.target.parentElement.parentElement.remove();
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
    if (e.target.isContentEditable) {
        e.target.contentEditable = false;
    }
});

taskContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.isContentEditable) {
        e.preventDefault();
        e.target.blur();
    }
});

taskContainer.addEventListener("click", (e) => {
    const checkBtn = e.target.closest(".icon-check");

    checkBtn.closest(".taskList").querySelector("p").classList.toggle("check");
});
