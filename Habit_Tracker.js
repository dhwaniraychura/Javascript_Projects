
let Tasks = [
    {
        Title: "Morning Exercise",
        Description: "30 minutes of jogging in the park",
        Category: "Health",
        Date: "2025-09-11",
        Status: "Completed"
    },
    {
        Title: "Complete Assignment",
        Description: "Finish JavaScript project before deadline",
        Category: "Study",
        Date: "2025-09-11",
        Status: "Pending"
    },
    {
        Title: "Team Meeting",
        Description: "Attend Zoom call with project team at 11 AM",
        Category: "Work",
        Date: "2025-09-10",
        Status: "Overdue"
    }
]

class Task {
    constructor(Title, Description, Category, Date, Status) {
        this.Title = Title,
            this.Description = Description,
            this.Category = Category,
            this.Status = Status,
            this.Date = Date;
    }
};
addTask = (event) => {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    if (!title || !description || !category || !date || !status) {
        alert("Please fill up all the category!!!");
        return;
    }

    let newTask = new Task(title, description, category, date, status);
    Tasks.push(newTask);
    displayTask();

    document.querySelector("form").reset();
}
displayTask = (filterdArray = Tasks) => {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    filterdArray.forEach((task, index) => {
        let box = document.createElement("div");
        box.className = "card p-4 m-3 w-100 rounded-4";
        box.innerHTML = `
            <h5 class="fw-bold mb-1">${task.Title}</h5>
            <p>${task.Description}</p>
           <p><span class="text-secondary mb-1">${task.Category}</span> | <span class="text-secondary">${task.Date}</span></p>
             <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0 fw-bold ${task.Status === "Completed" ? "text-success" : task.Status === "Overdue" ? "text-warning" : "text-danger"}">Status : ${task.Status}</p>
                <div>
                    <button class="btn btn-success btn-sm me-2 fs-5" onclick="completeTask(${index})"><i class="bi bi-check-lg"></i></button>
                    <button class="btn btn-danger btn-sm fs-5"><i class="bi bi-trash" onclick="deleteTask(${index})"></i></button>
                </div>
            </div>
        `;
        taskList.appendChild(box);

    });
    updateDashboard();
}
window.onload = () => {
    displayTask();
};
searchTask = () => {
    let query = document.getElementById("searchInput").value.toLowerCase();

    let filterTask = Tasks.filter(task =>
        task.Title.toLowerCase().includes(query) ||
        task.Description.toLowerCase().includes(query) ||
        task.Category.toLowerCase().includes(query) ||
        task.Date.toLowerCase().includes(query)
    );

    displayTask(filterTask);
}
filterTask = () => {
    let query = document.getElementById("categoryList").value.toLowerCase();

    let filtered = Tasks.filter(task =>
        query === "all" || task.Status.toLowerCase() === query
    );

    displayTask(filtered);
}
completeTask = (index) => {
    Tasks[index].Status = "Completed";
    displayTask();
}
deleteTask = (index) => {
    Tasks.splice(index, 1);
    displayTask();
}
updateDashboard = () => {
    let total = Tasks.length;
    let Pending = Tasks.filter(Tasks => Tasks.Status === "Pending").length;
    let Complete = Tasks.filter(Tasks => Tasks.Status === "Completed").length;
    let Overdue = Tasks.filter(Tasks => Tasks.Status === "Overdue").length;
    let progressPercent = total === 0 ? 0 : ((Complete / total) * 100 + 0.5) | 0;
    document.getElementsByClassName("dashboard")[0].innerHTML = `
        <h3>Dashboard</h3>
        <p>Total Tasks : ${total}</p>
        <p>Completed tasks : ${Complete}</p>
        <p>Pending tasks : ${Pending}</p>
        <p>Overdue tasks : ${Overdue}</p>
        <p>Progress : ${progressPercent}%</p>
    `;
}
