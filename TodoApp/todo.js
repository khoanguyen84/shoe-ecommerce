class Task {
    constructor(id, taskName) {
        this.id = id;
        this.taskName = taskName;
        this.status = "processing"
    }
}

class TaskManager {
    static taskList = [];
    static addTask(task) {
        this.taskList.push(task)
    }
    static getTaskList() {
        return this.taskList;
    }
    static getLastId(){
        let maxId = 0;
        for(let task of this.taskList){
            if(task.id > maxId){
                maxId = task.id
            }
        }
        return maxId;
    }

    static makeDone(taskId){
        this.taskList = this.taskList.map(function(task){
            if(task.id == taskId){
                task.status = "done"
            }
            return task;
        })
    }

    static removeTask(taskId){
        this.taskList = this.taskList.filter((task) => task.id != taskId)
    }
}

TaskManager.addTask(new Task(1, "Bug fix"))
TaskManager.addTask(new Task(2, "Build Feature add to cart"))
TaskManager.addTask(new Task(3, "QA Task 001"))

function renderTaskList() {
    let htmls = TaskManager.getTaskList().map(function (task, index) {
        return `
            <tr>
                <td>#task_${task.id}</td>
                <td>${task.taskName}</td>
                <td>${task.status}</td>
                <td>
                    <button class="${task.status == 'processing' ? "btn btn-outline-warning btn-sm" : "btn btn-outline-warning btn-sm d-none"}"
                        onclick="changeStatus(${task.id})"
                    >
                        <i class="fa fa-check">
                            Make Done
                        </i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm"
                        onclick="deleteTask(${task.id})"
                    >
                        <i class="fa fa-trash">
                            Remove
                        </i>
                    </button>
                </td>
            </tr>
        `
    })
    document.getElementById('tbTaskList').innerHTML = htmls.join('')
}

function createTask(e){
    e.preventDefault()
    let taskName = document.getElementById('taskName').value;
    let lastId = TaskManager.getLastId();
    let task = new Task(lastId + 1, taskName)
    TaskManager.addTask(task)
    renderTaskList();
    reset();
}

function changeStatus(taskId){
    let confirm = window.confirm('Are you sure to change status?')
    if(confirm){
        TaskManager.makeDone(taskId);
        renderTaskList();
    }    
}

function deleteTask(taskId){
    let confirm = window.confirm('Are you sure to remove this task?')
    if(confirm){
        TaskManager.removeTask(taskId);
        renderTaskList();
    }    
}

function reset(){
    document.getElementById('taskName').value = null
}
renderTaskList()