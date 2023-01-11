document.addEventListener("keydown", (e) => {
    let taskInput = document.getElementById('addToDo').value;
    let taskList = document.querySelector('ul');

    if (e.key === "Enter") {
        if (taskInput === "") {
            alert("There's no task to be added. Please input some task.");
        } else {
            let li = document.createElement('li');
            li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskInput}`;
            taskList.appendChild(li);
            document.getElementById('addToDo').value = "";
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('clicked')) {
        e.target.classList.remove('clicked')
    } else {
    e.target.classList.add('clicked')
    }
});

