import "./styles.css"
import { CreateProject , CreateTask , placeTaskInProject } from "./structure-logic.js"
import { setupProjectButtons , loadProject } from "./display-changes.js";


setupProjectButtons()
let projectDefault= new CreateProject("General");
console.log(projectDefault)
let taskTest = new CreateTask("Finish project", "Wrap up display", "Tomorrow", "HIGH", projectDefault)
placeTaskInProject(taskTest)

let newTaskButton = document.querySelector("#new-task")
let newTaskForm = document.querySelector("#new-task-form")
let taskDialog = document.querySelector("#taskDialog")

newTaskButton.addEventListener('click', () => {
    newTaskForm.style.display = "block"
    taskDialog.showModal()
})


loadProject(projectDefault)

