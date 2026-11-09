const inputTask = document.querySelector("#inputTask");
const upload = document.querySelector("#upload");
const taskContainer = document.querySelector(".taskContainer");


function addTask(e) {
    e.preventDefault();
    const newTask = inputTask.value;
    if (newTask.trim() === "") {
        alert("Please Enter Task Name");;
    } else {
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
        newTask.querySelector("p").textContent = inputTask.value;
        taskContainer.appendChild(newTask);
        inputTask.value = "";
        setTasks();
    }
}
upload.addEventListener("click", addTask);


taskContainer.addEventListener("click", (e) => {
    // Favorite
    if (e.target.classList.contains("icon-star")) {
        const taskList = e.target.closest(".taskList");
        const isFavorite = taskList.classList.toggle("favorite");
        if (isFavorite) {
            taskContainer.prepend(taskList);
            setTasks();
        } else {
            const nextTaskId = taskList.dataset.nextTask;
            if (nextTaskId) {
                const nextTask = document.querySelector(`[data-task-id="${nextTaskId}"]`);
                taskContainer.insertBefore(taskList, nextTask);
            } else {
                taskContainer.appendChild(taskList);
                setTasks();
            }
        }
    }

    // Delete
    if (e.target.classList.contains("icon-trash")) {
        const taskList = e.target.closest(".taskList");
        taskList.remove();
        setTasks();
    }

    // Checked Task
    if (e.target.classList.contains("icon-check")) {
        e.target.closest(".taskList").querySelector("p").classList.toggle("check");
        e.target.classList.toggle("check2");
        setTasks();
    }

    // Edit Task
    const editBtn = e.target.closest(".icon-edit");
    if (!editBtn) return;

    const text = editBtn.closest(".taskList").querySelector("p");
    text.contentEditable = true;
    text.focus();
});

taskContainer.addEventListener("focusout", (e) => {
    e.target.contentEditable = false;
    setTasks();
});


// Save List data to local storage
function setTasks() {
    localStorage.setItem("tasksList", taskContainer.innerHTML);
}

// Load List data from local storage
function loadTasks() {
    taskContainer.innerHTML = localStorage.getItem("tasksList") || "";
}

loadTasks();