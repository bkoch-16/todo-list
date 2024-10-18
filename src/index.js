import "./styles.css"
import { CreateProject , CreateTask , placeTaskInProject , createNewProject } from "./structure-logic.js"
import { setupProjectButtons , loadProject, loadNewProjectButtons } from "./display-changes.js";


const myProjects = []

setupProjectButtons()
myProjects[0]= new CreateProject("General");
let taskTest = new CreateTask("Finish project", "Wrap up display", "Tomorrow", "HIGH", myProjects[0])
placeTaskInProject(taskTest)

let newTaskButton = document.querySelector("#new-task")
let newTaskForm = document.querySelector("#new-task-form")
let taskDialog = document.querySelector("#taskDialog")

newTaskButton.addEventListener('click', () => {
    newTaskForm.style.display = "block"
    taskDialog.showModal()
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
    newProjectForm.reset()
    document.querySelector("#project-title-input").focus()
})



loadProject(myProjects[0])

