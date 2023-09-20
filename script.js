//PL: funkcja dodająca tekst wpisany do formularza jako element listy
//ENG: adding text written into the form as list element

function addTask() {
    const formInput = document.getElementById("taskInput");
    const formValue = formInput.value;
    if (formValue) {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.textContent = formValue;
        taskList.appendChild(newTask);
        formInput.value = "";
    }
}

//PL: funkcja usuwająca wszystkie elementy listy
//ENG: removing all list elements

function resetTasks() {
    const getList = document.getElementById("taskList");
    while (getList.hasChildNodes()) {
        getList.removeChild(getList.firstChild);
    }
}