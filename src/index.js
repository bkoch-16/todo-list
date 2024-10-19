import "./styles.css"
import { CreateProject , CreateTask , placeTaskInProject , createNewProject , createNewTask } from "./structure-logic.js"
import { setupProjectButtons , loadProject, loadNewProjectButtons, connectNewProjectButtons } from "./display-changes.js";


const myProjects = []

setupProjectButtons()
myProjects[0]= new CreateProject("General");
//let taskTest = new CreateTask("Finish project", "Wrap up display", "Tomorrow", "HIGH", myProjects[0])
//placeTaskInProject(taskTest)

let newTaskButton = document.querySelector("#new-task")
let newTaskForm = document.querySelector("#new-task-form")
let taskDialog = document.querySelector("#taskDialog")
let taskCancel = document.querySelector("#task-cancel-button")

newTaskButton.addEventListener('click', () => {
    newTaskForm.style.display = "block"
    taskDialog.showModal()
})

taskCancel.addEventListener('click', () => {
    taskDialog.close()
    newTaskForm.reset()
})

newTaskForm.addEventListener('submit', () => {
    event.preventDefault()
    let newTask = new CreateTask(myProjects)
    console.log(newTask)
    newTask.projectName.list.push(newTask)
    loadProject(newTask.projectName)
    newTaskForm.reset()
    document.querySelector("#task-title-input").focus()

})

let newProjectButton = document.querySelector("#new-project")
let newProjectForm = document.querySelector("#new-project-form")
let projectDialog = document.querySelector("#projectDialog")
let projectCancel = document.querySelector("#project-cancel-button")

newProjectButton.addEventListener('click', () => {
    newProjectForm.style.display = "block"
    projectDialog.showModal()
})

projectCancel.addEventListener('click', () => {
    projectDialog.close()
    newProjectForm.reset()
})

newProjectForm.addEventListener('submit', () => {
    event.preventDefault()
    createNewProject(myProjects)
    loadNewProjectButtons(myProjects)
    connectNewProjectButtons(myProjects)
    newProjectForm.reset()
    document.querySelector("#project-title-input").focus()
})


loadProject(myProjects[0])

