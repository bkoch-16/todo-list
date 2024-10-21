import "./styles.css"
import { CreateProject , CreateTask , createNewProject , createNewTask, findProjectIndex } from "./structure-logic.js"
import { setupProjectButtons , loadProject, loadNewProjectButtons, connectNewProjectButtons } from "./display-changes.js";

/*
index.js:40 Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'CreateProject'
    |     property 'list' -> object with constructor 'Array'
    |     index 0 -> object with constructor 'CreateTask'
    --- property 'projectName' closes the circle
    at JSON.stringify (<anonymous>)
    at HTMLFormElement.eval (index.js:40:1)
*/
var myProjects = []

const retrievedData = localStorage.getItem('myProjects')

if (retrievedData) {
    console.log("retrieve " +JSON.parse(retrievedData))
}

setupProjectButtons()
myProjects[0]= new CreateProject("General");
localStorage.setItem('myProjects', JSON.stringify(myProjects))

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
    console.log(myProjects)
    let index = findProjectIndex(myProjects, newTask)
    myProjects[index].list.push(newTask)
    console.log(myProjects)
    loadProject(myProjects[index])
    localStorage.setItem('myProjects', JSON.stringify(myProjects))
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

